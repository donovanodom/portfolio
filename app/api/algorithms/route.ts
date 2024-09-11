import { getAlgorithms } from "@/lib/tasks/algorithms";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
  if(req.method === 'GET'){
    try {
        const { algorithms, error } = await getAlgorithms()
        if(error) throw new Error(error)
        return NextResponse.json(algorithms)
    } catch (error: any) {
        return NextResponse.json({ error: error.message})
    }
  }
}

