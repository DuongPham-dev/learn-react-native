import { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    Array.from({ length: 1 }).map((_, index) => ({
      id: index,
      name: "112323",
    }))
  );

  const handleChangeTask = useCallback((value) => {
    setTask(value);
  }, []);

  const handleAddTask = () => {
    setTasks((prev) => {
      return [
        {
          id: prev[prev.length - 1].id + 1,
          name: task,
        },
        ...prev,
      ];
    });

    setTask("");
  };

  return (
    <View style={style.container}>
      {/* Information entry section */}
      <View style={style.addTaskBox}>
        <TextInput
          placeholder="Enter task name..."
          style={style.enterText}
          value={task}
          onChangeText={handleChangeTask}
        />
        <Pressable style={style.addButton} onPress={handleAddTask}>
          <Text style={{ color: "white", fontSize: 15 }}>Add task</Text>
        </Pressable>
      </View>

      {/* Display tasks */}
      <FlatList
        data={tasks}
        // keyExtractor={(i) => i.id}
        renderItem={(task) => {
          console.log("task.index", task.index);

          return (
            <Text key={task.index} style={style.task}>
              {task.item.name}
            </Text>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
      {/* <ScrollView>
        {tasks.map((task, index) => {
          console.log("index", index);

          return (
            <Text key={index} style={style.task}>
              {task.name}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  addTaskBox: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  enterText: {
    flex: 1,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "green",
  },
  addButton: {
    backgroundColor: "blue",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  task: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});
