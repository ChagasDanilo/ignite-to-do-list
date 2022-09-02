import { useState } from "react";
import {
  View,
  Alert
} from "react-native";

import { Header } from "../components/Header";
import { TasksInfo } from "../components/TaskInfo";
import { TasksList } from "../components/TaskList";
import { ToDoInput } from "../components/ToDoInput";
import { styles } from "./styles";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleTaskDone(description: string) {
    const updateTasks = tasks.map(task => ({ ...task }));
    const foundItem = updateTasks.find(element => element.description === description);
    if (!foundItem) return;
    foundItem.done = !foundItem.done;
    setTasks(updateTasks);
  }

  function handleTaskRemove(description: string) {
    Alert.alert("Remover", "Remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks(prevState => prevState.filter(task => task.description !== description))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  function handleTaskAdd(newTaskDescription: string) {
    if (tasks.find(element => element.description === newTaskDescription)) {
      return Alert.alert(
        "Tarefa já existe",
        "Essa tarefa já foi adicionada anteriormente!"
      );
    }
    setTasks(prevState => [
      ...prevState,
      {
        description: newTaskDescription,
        done: false
      }
    ]);
  }

  return (
    <View style={styles.containerBlackLight}>
      <View style={styles.containerBlack} />
      <View style={styles.container}>
        <Header />
        <ToDoInput addTask={handleTaskAdd} />
        <TasksInfo
          tasksCounter={tasks.length}
          tasksDone={tasks.filter(task => task.done === true).length}
        />
        <TasksList
          tasks={tasks}
          removeTask={handleTaskRemove}
          toggleTaskDone={handleTaskDone}
        />
      </View>
    </View>
  );
}
