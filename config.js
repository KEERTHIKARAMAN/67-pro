import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyA7KhTSUyYaAr5NVIZ91Qr3wQlrVlgybL8",
        authDomain: "school-6a3cd.firebaseapp.com",
        projectId: "school-6a3cd",
        storageBucket: "school-6a3cd.appspot.com",
        messagingSenderId: "795018078237",
        appId: "1:795018078237:web:4282a013b6b2621b857ef4" 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();