'use server'
import { redirect } from "next/navigation";
import { db } from "../db";
import { asyncHandle } from "../utils";


const createAction =  async(formState: {message: string}, formData: FormData) => {
    const title = formData.get('title');
    const code = formData.get('code');
    
    if(!title || !code) return {message: 'title or code undefined'};
    if(typeof title !== 'string' || title.length < 5) return {message: 'invalid title'};
    if(typeof code !== 'string' || code.length < 5) return {message: 'invalid code'};


    const newSnipet = await db.snippet.create({data: {
        title,
        code,
    }})
    console.log(newSnipet);
    redirect('/');
}


const editAction =  async(id: number, code: string) => {
    const newSnipet = await db.snippet.update({
        where: {id},
        data: {
            code 
        }
    })

    console.log(newSnipet);
    redirect('/');
}


export {editAction, createAction};