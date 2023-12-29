import express from 'express';
import bodyParser from 'body-parser';

import userTaks from './routers/tasks.js'

const app=express();
const port=5000;

app.use(bodyParser.json())

app.use('/tasks',userTaks )

app.get('/',(req,resp)=>resp.send("Hello"))


app.listen(port,()=>console.log(`server running on port http://localhost:${port}`))
