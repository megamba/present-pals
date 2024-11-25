// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Your Firebase config from Firebase Console
// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Function to check for authenticated user and get their UID
export const getUserId = () => {
    return "user-1234567890";
    // return "user-12121212";
    // return "user-33415";
//   return new Promise((resolve, reject) => {
//     const user = auth.currentUser;
//     if (user) {
//       resolve(user.uid); // Return UID if the user is authenticated
//     } else {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           resolve(user.uid);
//         } else {
//           reject('No user is signed in');
//         }
//       });
//     }
//   });
};