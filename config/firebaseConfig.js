const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'employee-app-node-cbb49.firebasestorage.app'
  });

  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  module.exports = { db, bucket };
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}
