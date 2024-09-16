import { getMiniApps } from "@/lib/tasks/mini-apps";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any){
  const { params } = context
  if(req.method === 'GET'){
    try {
        const { miniApp, error } = await getMiniApps(params["mini-appId"])
        if(error) throw new Error(error)
        return NextResponse.json(miniApp)
    } catch (error: any) {
        return NextResponse.json({ error: error.message})
    }
  }
}