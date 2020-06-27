importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyD-iENrntrSnZ23z0RF9BBM3SZ92oSKxoc",
    authDomain: "my-mentor-2cff4.firebaseapp.com",
    databaseURL: "https://my-mentor-2cff4.firebaseio.com",
    projectId: "my-mentor-2cff4",
    storageBucket: "my-mentor-2cff4.appspot.com",
    messagingSenderId: "194532485887",
    appId: "1:194532485887:web:92beb9a035ee6cd6663aca",
    measurementId: "G-1W5H6ZV4K3"
});

const messaging = firebase.messaging();