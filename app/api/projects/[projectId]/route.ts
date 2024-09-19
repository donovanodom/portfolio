import { getProjects } from "@/lib/tasks/projects";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any){
  const { params } = context
  if(req.method === 'GET'){
    try {
        const { project, error } = await getProjects(params["projectId"])
        if(error) throw new Error(error)
        return NextResponse.json(project)
    } catch (error: any) {
        return NextResponse.json({ error: error.message})
    }
  }
}