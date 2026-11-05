importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js');

firebase.initializeApp({
    databaseURL: "https://chatfamilia-386df-default-rtdb.firebaseio.com"
});

// Este archivo se encarga de despertar la alerta en segundo plano
