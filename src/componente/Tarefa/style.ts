import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 5,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btnRemover: {
    padding: 5,
    backgroundColor: "#ffcccc",
    borderRadius: 5,
    alignSelf: "flex-end",
    marginLeft: 10,
    width: "auto",
  },
  btnRemoverText: {
    color: "#f00",
    fontWeight: "bold",
  },
});
