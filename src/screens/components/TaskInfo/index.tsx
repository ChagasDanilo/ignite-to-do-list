import { View } from "react-native";
import { Badge, Text } from "react-native-paper";

import { styles } from "./styles";

interface TasksInfoProps {
  tasksCounter: number;
  tasksDone: number;
}
export function TasksInfo({ tasksCounter, tasksDone }: TasksInfoProps) {
  return (
    <View style={styles.viewInfo}>
      <View style={styles.viewInfoDetail}>
        <Text style={styles.textCreated}>Criadas</Text>
        <Badge style={styles.badge} size={25}>
          {tasksCounter}
        </Badge>
      </View>
      <View style={styles.viewInfoDetail}>
        <Text style={styles.textCompleted}>Concluídas</Text>
        <Badge style={styles.badge} size={25}>
          {tasksDone}
        </Badge>
      </View>
    </View>
  );
}
