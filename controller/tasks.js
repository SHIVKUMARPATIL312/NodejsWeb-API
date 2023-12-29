import express from 'express';
import { v4 as uuidv4 } from 'uuid';

let tasks=[]

export const getAllTasks=(req,resp)=>{
    resp.send(tasks)
}

export const getTaskById = (req,resp)=>{
    const {id}=req.params
    const foundTask=tasks.find((task)=>task.id===id)
   resp.send(foundTask)
}

export const creteTask=(req,resp)=>{
    const task=req.body;
     tasks.push({ ...task, id:uuidv4()})
    resp.send(`Your task with id ${task.title} added to the database`)
}

export const deleteTask=(req,resp)=>{
    const {id}=req.params
    tasks=tasks.filter((task)=>task.id!=id)
    resp.send(`Your task with id ${id} deleted from the database`)
}

export const updateTask=(req,resp)=>{
    const {id}=req.params;
    const {title, description,experience} =req.body

    const task=tasks.find((task)=>task.id===id)

    if(title){
        task.title=title;
    }

    if(description){
        task.description=description;
    }

    if(experience){
        task.experience=experience;
    }

    resp.send(`user with ${id} is updated`)
}