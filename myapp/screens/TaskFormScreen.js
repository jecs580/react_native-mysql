import React,{useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Layout from '../components/Layout'
import {saveTask, getTask, updateTask} from '../api'

const TaskFormScreen = ({navigation, route}) => {
    const [task, setTask] = useState({
        "tittle":'',
        "description":''
    });
    const [editing, setEditing] = useState(false);

    const handleChange=(name, value)=>{
        setTask({...task,[name]:value})
    }
    const handleSubmit=async()=>{
        try {
            if(!editing){
                await saveTask(task);
            }else{
                await updateTask(route.params.id, task)
            }
        } catch (error) {
            console.log(error); 
        }
        navigation.navigate('HomeScreen')
    }
    useEffect(()=>{
        if(route.params && route.params.id){
            setEditing(true);
            navigation.setOptions({headerTitle:'Actualizar una tarea'});
            (async ()=>{
                const res = await getTask(route.params.id);
                setTask({tittle:res.task.tittle, description:res.task.description})
            })();
        }
    },[]);
    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Titulo..."
                placeholderTextColor="#546574"
                value={task.tittle}
                onChangeText={(text)=>handleChange('tittle',text)}
                />
            <TextInput
                style={styles.input}
                placeholder="Descripcion..."
                placeholderTextColor="#546574"
                value={task.description}
                onChangeText={(text)=>handleChange('description',text)}
            /> 
            {
                !editing?(
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.buttonSave}>
                    <Text style={styles.buttonText}>Guardar Tarea</Text>
                </TouchableOpacity>
                ):(
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.buttonUpdate}>
                    <Text style={styles.buttonText}>Editar Tarea</Text>
                </TouchableOpacity>
                )
            }
        </Layout>
    )
};
const styles = StyleSheet.create({
    input:{
        width: '90%',
        marginBottom:7,
        fontSize:14,
        borderWidth:1,
        borderColor:'#10ac84',
        height: 35,
        color: '#ffffff',
        padding: 4,
        textAlign:'center',
        borderRadius:5
    },
    buttonSave:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:3,
        backgroundColor:'#10ac84',
        width: '90%',
    },
    buttonUpdate: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#e58e26",
        width: "90%",
      },
    buttonText:{
        color: '#ffffff',
        textAlign:'center'
    }
})

export default TaskFormScreen
