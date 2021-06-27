require('dotenv').config()

export const config ={
    host:process.env.HOST || 'localhost',
    user:process.env.USER || 'root',
    password:process.env.PASSWORD || '',
    database:process.env.DATABASE ||'test',
}