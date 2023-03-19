// Componente FormularioTarefa.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
interface Props {
  adicionarTarefa: (tarefa: string) => void;
}

export function FormularioTarefa({ adicionarTarefa }: Props) {
  const [tarefa, setTarefa] = useState("");

  function handleSubmit() {
    if (tarefa.trim() !== "") {
      adicionarTarefa(tarefa.trim());
      setTarefa("");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}
