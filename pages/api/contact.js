import { MongoClient } from "mongodb"

async function handler(req, res) {
    if(req.method === 'POST'){
        const { email, name, message } = req.body

        if(
            !email || 
            !email.includes('@') || 
            !name || 
            name.trim() === '' || 
            !message || 
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid Input.'})
            return
        }

        const newMessage = {
            email,
            name,
            message
        }

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.lbooe.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

        let client

        try {
            client = await MongoClient.connect(connectionString)
        } catch (error) {
            res.status(500).json({ message: 'Cannot connect to database'})
        }

        const db = client.db()

        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
            client.close()
            res.status(500).json({message: 'Message could not be stored in the database'})
            return
        }

        client.close()

        res.status(201).json({ text: 'Successfully stored message', message: newMessage })
    }
}

export default handler