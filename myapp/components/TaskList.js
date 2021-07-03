import React,{useState, useEffect} from 'react'
import {FlatList, RefreshControl } from 'react-native'
import {getTasks, deleteTask} from '../api'
import TaskItem from './TaskItem'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const loadTasks = async()=>{
       const data = await getTasks();
       setTasks(data.taks)
    }
    useEffect(() => {
        loadTasks()
    }, [])
    const handleDelete=async(id)=>{
        await deleteTask(id)
        await loadTasks()
    }
    const renderItem =({item})=>{
            return <TaskItem task={item} handleDelete={handleDelete}/>
    };
    const onRefresh = React.useCallback(async()=>{
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    })
    return (
        <FlatList
        style={{width:'100%'}}
                data={tasks}
                keyExtractor={(item)=> item.id+''}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        colors={['#78e08f']}
                        progressBackgroundColor="#0a3d62"
                        onRefresh={onRefresh}
                    />
                }
        />
    )
}

export default TaskList
