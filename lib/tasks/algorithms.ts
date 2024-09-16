import { Db, ObjectId } from "mongodb";
import clientPromise from "./mongodb";

let client
let db: Db
let algorithms: any

async function init() {
  if (db) return
  try{
    client = await clientPromise
    db = await client.db()
    algorithms = await db.collection('algorithms')
  } catch (error) {
    throw new Error('Failed to establish connection to db')
  }
}

(async () => {
  await init()
})()

export async function getAlgorithms(id = null) {
  if(id){
    const algorithmId = ObjectId.createFromHexString(id)
    try {
      const result = await algorithms
        .findOne({_id: algorithmId})
      return { algorithm: result }
    } catch (error) {
      return { error: 'Failed to fetch algorithm' }
    }
  } else {
    try {
      if(!algorithms) await init()
      const result = await algorithms
        .find({})
        .toArray()
      return { algorithms: result }
    } catch (error) {
      return { error: 'Failed to fetch algorithms' }
    }
  }
}