import { Db, ObjectId } from "mongodb";
import clientPromise from "./mongodb";

let client
let db: Db
let projects: any

async function init() {
  if (db) return
  try{
    client = await clientPromise
    db = await client.db()
    projects = await db.collection('projects')
  } catch (error) {
    throw new Error('Failed to establish connection to db')
  }
}

(async () => {
  await init()
})()

export async function getProjects(id = null) {
  if(id){
    const projectId = ObjectId.createFromHexString(id)
    try {
      if(!projects) await init()
      const result = await projects
        .findOne({_id: projectId})
      return { project: result }
    } catch (error) {
      return { error: `Failed to fetch project: ${error}`, }
    }
  } else {
    try {
      if(!projects) await init()
      const result = await projects
        .find({})
        .toArray()
      return { projects: result }
    } catch (error) {
      return { error: `Failed to fetch projects: ${error}` }
    }
  }
}