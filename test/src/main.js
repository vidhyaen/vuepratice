import Vue from "vue";
import App from "./App.vue";
 import firebase from "firebase";
// import 'firebase/firestore';

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyDAvvjhZ6dCmcjdH8PpBd7GllKtVchD6vg",
  authDomain: "todo-df21b.firebaseapp.com",
  databaseURL: "https://todo-df21b.firebaseio.com",
  projectId: "todo-df21b",
  storageBucket: "todo-df21b.appspot.com",
  messagingSenderId: "164487419351",
  appId: "1:164487419351:web:4af0f1cfc7a981eb2f2792",
  measurementId: "G-SDPQ3EC8JT",
};

firebase.initializeApp(config);
export const db= firebase.firestore();

new Vue({
  firebase,
  render: (h) => h(App),
}).$mount("#app");
