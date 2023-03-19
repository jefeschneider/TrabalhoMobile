import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface Props {
  nome: string;
  status: boolean;
  btnRemover: () => void;
  btnConcluir: () => void;
}

export function Tarefa({ nome, status, btnRemover, btnConcluir }: Props) {
  function handleChecked() {
    btnConcluir();
  }

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: "#f7f7f7" }]}
      onPress={handleChecked}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.nome,
            { textDecorationLine: status ? "line-through" : "none" },
          ]}
        >
          {nome}
        </Text>
        <TouchableOpacity style={styles.btnRemover} onPress={btnRemover}>
          <Text style={styles.btnRemoverText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
