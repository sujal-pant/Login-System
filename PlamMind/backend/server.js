const express = require("express");
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

client.connect();
app.use(cors());
app.use(bodyparser.json());
// Database Name
const dbName = "PLAMMIND";
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("details");
  const findResult = await collection.find({}).toArray();
  res.send(findResult);
});
app.post("/", async (req, res) => {
  let passwords = req.body;
  const db = client.db(dbName);
  const collection = db.collection("details");
  const findResult = await collection.insertOne(passwords);
  res.send(findResult);
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const db = client.db(dbName);
  const collection = db.collection("details");

  const user = await collection.findOne({ email, password });
  
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post("/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const db = client.db(dbName);
    const collection = db.collection('details'); 
    
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Email not found' });
    }

  
    await collection.updateOne(
      { email },
      { $set: { password: newPassword } }
    );

    res.json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
