import { Db, ObjectId } from "mongodb";
import clientPromise from "./mongodb";

let client
let db: Db
let miniApps: any

async function init() {
  if (db) return
  try{
    client = await clientPromise
    db = await client.db()
    miniApps = await db.collection('mini-apps')
  } catch (error) {
    throw new Error('Failed to establish connection to db')
  }
}

(async () => {
  await init()
})()

export async function getMiniApps(id = null) {
  if(id){
    const miniAppId = ObjectId.createFromHexString(id)
    try {
      if(!miniApps) await init()
      const result = await miniApps
        .findOne({_id: miniAppId})
      return { miniApp: result }
    } catch (error) {
      return { error: `Failed to fetch mini app: ${error}`, }
    }
  } else {
    try {
      if(!miniApps) await init()
      const result = await miniApps
        .find({})
        .toArray()
      return { miniApps: result }
    } catch (error) {
      return { error: `Failed to fetch mini apps: ${error}` }
    }
  }
}