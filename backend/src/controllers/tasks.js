import {connect} from '../database'
import {request} from 'express'
export const getTasks=async (req,res)=>{
   try {
        const db =  await connect();
        const [rows]= await db.query('SELECT * FROM tasks')
        res.json({
            ok:true,
            taks:rows
        });
   } catch (error) {
       console.log(error);
       res.json({
        ok:false,
        msg:'Algo salio mal!'
    });
   }
}
export const getTask=async (req,res)=>{
    const id = req.params['id'];
   try {
        const db =  await connect();
        const [rows]= await db.query('SELECT * FROM tasks WHERE tasks.id = ?',[id])
        res.json({
            ok:true,
            task:rows[0]
        })
   } catch (error) {
       console.log(error);
        res.json({
            ok:false,
            msg:'Algo salio mal!'
        });
   }
}
export const getTaskCount= async(req,res)=>{
    const db = await connect();
    const [rows] = await db.query('SELECT COUNT(*) FROM tasks');
    res.json({
        ok:true,
        Task_count:rows[0]["COUNT(*)"]
    })
}
export const addTask=async (req= request,res)=>{
    const {title,description} = req.body;
    const db = await connect();
    const [results]= await db.query('INSERT INTO tasks(tittle,description) VALUES(?,?)',[title, description])
    res.json({
        ok:true,
        task:{
            id:results.insertId,
            title,
            description 
        }
    })
}
export const deleteTask=(req,res)=>{
    res.send('Hello World!!!')
}
export const updateTask=(req,res)=>{
    res.send('Hello World!!!')
}

