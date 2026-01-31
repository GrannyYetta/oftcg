// Create express and socket.io servers
const express = require("express");
const app = express();
const admin = require("firebase-admin");

require("dotenv").config({ path: "./config/.env" });

const expressServer = app.listen(9000, () => {
  console.log("Server running on port 9000");
});

const { Server } = require("socket.io");
const io = new Server(expressServer, {
  cors: ["http://localhost:5173"],
});

// initialize firebase admin
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { app, io };
