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
import { Badge, Text } from "react-native-paper";

import { Header } from "../components/Header";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const renderEmptyItem = ({ item }) =>
    <View style={styles.viewEmpty}>
      <Image
        style={styles.imageEmpty}
        source={require("../../images/Clipboard.png")}
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
          handleChecked(item);
        }}
        style={
          item.checked ? styles.touchableChecked : styles.touchableUnchecked
        }
      >
        {item.checked &&
          <Ionicons name="checkmark-sharp" size={20} color="#fff" />}
      </TouchableOpacity>
      <Text
        style={item.checked ? styles.textTaskChecked : styles.textTaskUnchecked}
      >
        {item.description}
      </Text>
      <TouchableOpacity onPress={() => handleTaskRemove(item.description)}>
        <Ionicons name="ios-trash-outline" size={25} color="#757575" />
      </TouchableOpacity>
    </View>;

  function handleChecked(item) {
    setTasks(prevState => prevState.filter(task => task !== item));
    setTasks(prevState => [
      ...prevState,
      {
        description: item.description,
        checked: !item.checked
      }
    ]);
  }

  function handleTaskRemove(_task: string) {
    Alert.alert("Remover", "Remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks(prevState => prevState.filter(task => task !== _task))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  function handleTaskAdd() {
    if (tasks.find(element => element.description === task)) {
      return Alert.alert(
        "Tarefa já existe",
        "Essa tarefa já foi adicionada anteriormente!"
      );
    }
    setTasks(prevState => [
      ...prevState,
      {
        description: task,
        checked: false
      }
    ]);
    setTask("");
  }

  return (
    <View style={styles.containerBlackLight}>
      <View style={styles.containerBlack} />
      <View style={styles.container}>
        <Header />
        <View style={styles.taskAddView}>
          <TextInput
            style={styles.taskAddInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#757575"}
            value={task}
            onChangeText={setTask}
            onSubmitEditing={handleTaskAdd}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Ionicons name="add-circle-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.viewInfo}>
          <View style={styles.viewInfoDetail}>
            <Text style={styles.textCreated}>Criadas</Text>
            <Badge style={styles.badge} size={25}>
              {tasks.length}
            </Badge>
          </View>
          <View style={styles.viewInfoDetail}>
            <Text style={styles.textCompleted}>Concluídas</Text>
            <Badge style={styles.badge} size={25}>
              {tasks.filter(task => task.checked === true).length}
            </Badge>
          </View>
        </View>

        <FlatList
          style={styles.flatList}
          data={tasks}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyItem}
          keyExtractor={item => item.description}
        />
      </View>
    </View>
  );
}
