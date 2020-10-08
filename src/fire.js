import firebase from "firebase";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBFs65A9oF-0aJRspVJf4zoORNabIG4JiY",
  authDomain: "uface-e6896.firebaseapp.com",
  databaseURL: "https://uface-e6896.firebaseio.com",
  projectId: "uface-e6896",
  storageBucket: "uface-e6896.appspot.com",
  messagingSenderId: "864455305097",
  appId: "1:864455305097:web:f49db035112f19dd0ce358",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
