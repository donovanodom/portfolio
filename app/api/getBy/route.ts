import db from '../../../lib/mongodb'

export default async (req, res) => {
  try {
    const { ethAddress } = req.query
    const collection = db.collection('requests')

    const record = await collection.findOne({ to: ethAddress })

    if (!record) {
      res.status(200).json({ message: 'Request not found' })
    } else {
      res.status(200).json(record)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error retrieving record' })
  }
}