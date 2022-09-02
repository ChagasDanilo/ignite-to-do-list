import { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Alert
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function ToDoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if(!task) return;
    addTask(task);
    setTask('')
  }

  return (
    <View style={styles.taskAddView}>
      <TextInput
        style={styles.taskAddInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={"#757575"}
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
        <Ionicons name="add-circle-outline" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}