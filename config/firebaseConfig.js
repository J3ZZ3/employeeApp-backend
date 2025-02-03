const admin = require('firebase-admin');
require('dotenv').config();

try {
  const serviceAccount = {
    type: "service_account",
    project_id: "employee-app-node-cbb49",
    private_key_id: "dd91645bbb04bf1442fa482772851c714447b9df",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCet/vHXd8eMlfb\n...-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-7oes7@employee-app-node-cbb49.iam.gserviceaccount.com",
    client_id: "109203130044663671037",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7oes7%40employee-app-node-cbb49.iam.gserviceaccount.com "
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "employee-app-node-cbb49.appspot.com"
  });

  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  module.exports = { db, bucket };
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}
