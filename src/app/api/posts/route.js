import dbConnection from "@/database/db-connect";
import Post from "@/model/post";
import { NextResponse } from "next/server";

export async function GET(){

    try{
        await dbConnection();
        const data = await Post.find()
        return NextResponse.json(data)
    }catch(err){
        console.log(err.name)
        return NextResponse.json({message:"Get response failed"})
    }
}

export async function POST(request){

    try{
        const {title,date,content,url} = await request.json()
        await dbConnection();
        await Post.create({title,date,content,url});
        return NextResponse.json({message:"Post Success"})
    }catch(err){
        console.log(err.name)
        return NextResponse.json({message:"Post Failed"})
    }
}