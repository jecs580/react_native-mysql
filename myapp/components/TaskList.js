import React from 'react'
import { View, Text,FlatList } from 'react-native'

const TaskList = ({tasks}) => {
    return (
        <FlatList
                data={tasks}
                keyExtractor={(item)=> item.id+''}
                renderItem={({item})=>{
                    return <Text>{item.tittle}</Text>
                }}
        />
    )
}

export default TaskList
