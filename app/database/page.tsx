import {MongoClient, ServerApiVersion} from 'mongodb'

const uri = process.env.MONGODB_URI 
if(!uri){
    throw new Error("environment variable MONGODB_URI is not defined");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Querying our database
    const cursor = await client.db("test").collection("user").find();
    const array = await cursor.toArray()
    console.log(array);
    return array;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default async function Database() {
    const users =  await run();
    return (<>
        {users.map(userObj=> <h1 key={userObj._id.toString()}>{userObj.name}</h1>)}
    </>)
  }