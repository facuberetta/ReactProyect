import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCTOP8g9FoHoc3EGfhjkHxy1T6NP3uZhv8",
    authDomain: "entrega-final-beretta.firebaseapp.com",
    projectId: "entrega-final-beretta",
    storageBucket: "entrega-final-beretta.firebasestorage.app",
    messagingSenderId: "15004102146",
    appId: "1:15004102146:web:f67fe4f660ef98ce9a411b",
    measurementId: "G-HV2WTPE5SP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
