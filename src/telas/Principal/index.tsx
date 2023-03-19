import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Tarefa } from "../../componente/Tarefa";
import { styles } from "./style";
import { v4 as uuidv4 } from "uuid";

const date = new Date();
const day = date.toLocaleDateString("pt-BR");

export default function Principal() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefa() {
    if (tarefas.some((t) => t.name === tarefa.trim())) {
      return console.log(tarefa, "- encontrado");
    } else if (!tarefa.trim()) {
      return console.log("encontrado vazio ou null");
    } else {
      setTarefas((prevState) => [
        ...prevState,
        { id: uuidv4(), name: tarefa.trim(), completo: false },
      ]);
      setTarefa("");
    }
  }

  function removerTarefa(id: string) {
    setTarefas((prevState) => prevState.filter((tarefa) => tarefa.id !== id));
  }

  function marcarConcluida(id: string) {
    setTarefas((prevState) =>
      prevState.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, completo: !tarefa.completo } : tarefa
      )
    );
  }

  const totalTarefas = tarefas.length;
  const totalTarefasConcluidas = tarefas.filter((t) => t.completo).length;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textEvento}>
        Lista de Tarefas (Clique para concluir).
      </Text>
      <Text style={styles.textData}>{day}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.textInputParticipant}
          placeholder="Tarefa a fazer"
          placeholderTextColor="#6b6b6b"
          onChangeText={setTarefa}
          value={tarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textTarefa}>Tarefas</Text>
      <Text style={styles.textTarefa}>
        Total de tarefas: {totalTarefas}/ Concluídas: {totalTarefasConcluidas}
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            nome={tarefa.name}
            status={tarefa.completo}
            btnRemover={() => removerTarefa(tarefa.id)}
            btnConcluir={() => marcarConcluida(tarefa.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
