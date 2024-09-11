import { getAlgorithms } from "@/lib/tasks/algorithms";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any){
  const { params } = context
  if(req.method === 'GET'){
    try {
        const { algorithm, error } = await getAlgorithms(params.algorithmId)
        if(error) throw new Error(error)
        return NextResponse.json(algorithm)
    } catch (error: any) {
        return NextResponse.json({ error: error.message})
    }
  }
}