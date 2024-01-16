'use server'
import { redirect } from "next/navigation";
import { db } from "../db";

const editAction = async(id: number, code: string) => {
    const newSnipet = await db.snippet.update({
        where: {id},
        data: {
            code 
        }
    })

    console.log(newSnipet);
    redirect('/');
}


export {editAction};