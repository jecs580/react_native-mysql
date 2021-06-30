import React,{useState} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Layout from '../components/Layout'
import {saveTask} from '../api'

const TaskFormScreen = ({navigation}) => {
    const [task, setTask] = useState({
        "tittle":'',
        "description":''
    })
    const handleChange=(name, value)=>{
        setTask({...task,[name]:value})
    }
    const handleSubmit=async()=>{
        saveTask(task);
        navigation.navigate('HomeScreen')
    }
    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Titulo..."
                placeholderTextColor="#546574"
                onChangeText={(text)=>handleChange('tittle',text)}
                />
            <TextInput
                style={styles.input}
                placeholder="Descripcion..."
                placeholderTextColor="#546574"
                onChangeText={(text)=>handleChange('description',text)}
            /> 
            <TouchableOpacity
                onPress={handleSubmit}
                style={styles.buttonSave}
            >
                <Text style={styles.buttonText}>Guardar Tarea</Text>
            </TouchableOpacity>
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
    buttonText:{
        color: '#ffffff',
        textAlign:'center'
    }
})

export default TaskFormScreen
