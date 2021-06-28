import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import {getTasks} from '../api'

import TaskList from '../components/TaskList'

const HomeScreen = () => {
    const [tasks, setTasks] = useState([])
    const loadTasks = async()=>{
       const data = await getTasks();
       setTasks(data.taks)
    }
    useEffect(() => {
        loadTasks()
    }, [])
    return (
        <View>
            <TaskList tasks={tasks}/>
        </View>
    )
}

export default HomeScreen
