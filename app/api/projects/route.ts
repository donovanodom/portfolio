import { getProjects } from "@/lib/tasks/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
  if(req.method === 'GET'){
    try {
        const { projects, error } = await getProjects()
        if(error) throw new Error(error)
        return NextResponse.json(projects)
    } catch (error: any) {
        return NextResponse.json({ error: error.message})
    }
  }
}

