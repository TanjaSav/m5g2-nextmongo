import { MongoClient, ServerApiVersion } from "mongodb";

// Get the MongoDB connection string from the environment variables
const uri = process.env.MONGODB_URI;

// Stop the app if the MongoDB URI is missing
if (!uri) {
  throw new Error("environment variable MONGODB_URI is not defined");
}

// Create a new MongoDB client with the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB and get data from two collections
async function run() {
  try {
    // Open connection to MongoDB
    await client.connect();

    // Select the database named "test"
    const db = client.db("test");

    // Get all documents from the "user" collection
    const users = await db.collection("user").find().toArray();

    // Get all documents from the "greetings" collection
    const greetings = await db.collection("greetings").find().toArray();

    // Return both collections to the page component
    return {
      users,
      greetings,
    };
  } finally {
    // Close the connection after the query is finished
    await client.close();
  }
}

// Server component that renders data from MongoDB
export default async function Database() {
  // Load users and greetings from MongoDB
  const { users, greetings } = await run();

  return (
    <>
      <h1>User:</h1>

      {/* Render every user document */}
      {users.map((userObj) => (
        <div key={userObj._id.toString()}>
          <p>{userObj.name}</p>
          <p>{userObj.email}</p>
          <p>{userObj.age}</p>
        </div>
      ))}

      <h1>Greetings:</h1>

      {/* Render every greeting document */}
      {greetings.map((greetingObj) => (
        <p key={greetingObj._id.toString()}>{greetingObj.greeting}</p>
      ))}
    </>
  );
}