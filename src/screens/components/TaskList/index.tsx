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
import { Text } from "react-native-paper";

import { styles } from "./styles";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (description: string) => void;
  removeTask: (description: string) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask
}: TasksListProps) {
  const renderEmptyItem = ({ item }) =>
    <View style={styles.viewEmpty}>
      <Image
        style={styles.imageEmpty}
        source={require("../../../images/Clipboard.png")}
      />
      <Text style={styles.textEmptyTitle}>
        Você ainda não tem taferas cadastradas
      </Text>
      <Text style={styles.textEmptyDescription}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>;

  const renderItem = ({ item }) =>
    <View style={styles.viewTask}>
      <TouchableOpacity
        onPress={() => {
          toggleTaskDone(item.description);
        }}
        style={item.done ? styles.touchableDone : styles.touchable}
      >
        {item.done &&
          <Ionicons name="checkmark-sharp" size={20} color="#fff" />}
      </TouchableOpacity>
      <Text style={item.done ? styles.textTaskDone : styles.textTask}>
        {item.description}
      </Text>
      <TouchableOpacity onPress={() => removeTask(item.description)}>
        <Ionicons name="ios-trash-outline" size={25} color="#757575" />
      </TouchableOpacity>
    </View>;

  return (
    <FlatList
      style={styles.flatList}
      data={tasks}
      renderItem={renderItem}
      ListEmptyComponent={renderEmptyItem}
      keyExtractor={item => item.description}
    />
  );
}
