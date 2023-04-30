 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBJEghGfNNNizQxHZytSfyPjB7Fz3JghdM",
    authDomain: "oasis-8a578.firebaseapp.com",
    projectId: "oasis-8a578",
    storageBucket: "oasis-8a578.appspot.com",
    messagingSenderId: "1068544561082",
    appId: "1:1068544561082:web:58f86e78b94f85a6a75783"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

