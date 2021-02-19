import React, {useState} from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/owl.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/owl.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/owl.jpg"),
  },
];

function MessagesScreen(props) {
const [messages, setMessages] = useState(initialMessages);
const handleDelete = message => {
  //Delete the message from messages
  setMessages(messages.filter(m => m.id !== message.id));
}

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => 
              <ListItemDeleteAction onPress={() => handleDelete(item)} />}
         />
       )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;