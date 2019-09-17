/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Icon, CheckBox } from 'react-native-elements';
import uuid from 'uuid/v4';

function Item({ data }) {

    const {task, complete} = data;
    const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{task}</Text>
      <CheckBox
        checked={complete}
        onPress={() => setChecked(!checked)}
      />
    </View>
  );
}


const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: false,
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false,
  },
];



const Screen2 = (props) => {

  const [task, setTask] = useState('');
  const [toDos, setTodoList] = useState(initialTodos);


    handleChangeEvent = event => {
        setTask(event, isChecked)
    }

    addTasksToList = ()=>{
        if(task){
            setTodoList([...toDos, {'id':uuid(), 'task':task, 'complete':false} ])
            setTask('');
        }

    }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <View style={styles.body}>

            <View style={{ flexDirection:'row',width:'100%', justifyContent:'space-between', borderColor: '#90CAF9', borderWidth: 1}}>
                <TextInput style={{ height: 40, width:'90%', borderWidth: 1, backgroundColor:'#E3F2FD', borderColor: '#90CAF9' }} value={task} onChangeText={handleChangeEvent } />
                <Icon style={{width:'10%', alignItems:'center', justifyContent:'center'}} name="add" size={32} color="#90CAF9" onPress={addTasksToList}/>
            </View>

            <FlatList
                style={{backgroundColor:'white'}}
                renderItem={({ item }) => <Item data={item} />}
                data={toDos}
                keyExtractor={item => item.id}
                itemSeparator={()=><View style={{backgroundColor:'red', height:0.5}}></View>}
            />

          </View>
      </SafeAreaView>
    </Fragment>
  );


};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    height:'100%'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  item: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal: 8,
      marginVertical: 8,
      marginHorizontal: 16,
  },
  title: {
   fontSize: 24,
  },
});

export default Screen2;
