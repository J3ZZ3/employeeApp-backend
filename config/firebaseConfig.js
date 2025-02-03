const admin = require('firebase-admin');
require('dotenv').config();

try {
  // Construct service account object from environment variables
  const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY) : undefined,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
  };

  // Validate required credentials
  if (!serviceAccount.private_key || !serviceAccount.project_id || !serviceAccount.client_email) {
    throw new Error('Missing required Firebase credentials');
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: `${serviceAccount.project_id}.appspot.com`
  });

  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  module.exports = { db, bucket };
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}
