import {connect} from '../database'
export const getTasks=async (req,res)=>{
   try {
        const db = await await connect();
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
        const db = await await connect();
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
export const getTaskCount=(req,res)=>{
    res.send('Hello World!!!')
}
export const addTask=(req,res)=>{
    res.send('Hello World!!!')
}
export const deleteTask=(req,res)=>{
    res.send('Hello World!!!')
}
export const updateTask=(req,res)=>{
    res.send('Hello World!!!')
}

