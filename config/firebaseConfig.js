const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'your-firebase-bucket-name.appspot.com',
  });
  console.log("Firebase initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
