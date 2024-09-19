import { getMiniApps } from "@/lib/tasks/miniApps";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
  if(req.method === 'GET'){
    try {
        const { miniApps, error } = await getMiniApps()
        if(error) throw new Error(error)
        return NextResponse.json(miniApps)
    } catch (error: any) {
        return NextResponse.json({ error: error.message})
    }
  }
}

