import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, onSnapshot, getFirestore, orderBy, limit } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
// import { currContList, currPropList, currBinnList } from './lib/stores/store';

/**
 * @type {any[]}
 */
  export let dbContacts  = [];

  /**
 * @type {any[]}
 */
  export let dbProperties  = [];

  /**
 * @type {any[]}
 */
  export let dbTodos = [];

  /**
 * @type {any[]}
 */
  export let dbBinnacle = [];

  

  // // Your web app's Firebase configuration svelte-tutorial
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCquwgpISPQ8TMZeFSi6VhiNLtOaGUtPcA",
  //   authDomain: "svelte-tutorial-f5d82.firebaseapp.com",
  //   projectId: "svelte-tutorial-f5d82",
  //   storageBucket: "svelte-tutorial-f5d82.appspot.com",
  //   messagingSenderId: "598142412491",
  //   appId: "1:598142412491:web:73a56f9f9c232058ee1d4e"
  // };

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBgaVo-bSos2GjBjds1hePHkz6GAGHQFus",
    authDomain: "jgcapital-bbfcf.firebaseapp.com",
    projectId: "jgcapital-bbfcf",
    storageBucket: "jgcapital-bbfcf.appspot.com",
    messagingSenderId: "834626798641",
    appId: "1:834626798641:web:fbd4818c82ab2f02588110"
  };


 

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  export const auth = getAuth(app)


  
  const bitacora = collection(db, "binnacles");
   const contactos = collection(db, "contacts");
   const propiedades = collection(db, "properties");
   const tareas = collection(db, "todos");

  (() => {
    getDocs(contactos)
    .then((response) => {
      return dbContacts = response.docs.map((item) => {
          return {... item.data(), id: item.id};
      })
    })
  })();

  (() => {
    getDocs(propiedades)
    .then((response) => {
      return dbProperties = response.docs.map((item) => {
          return {... item.data(), id: item.id};
      })
    })
  })();

  (() => {
    getDocs(bitacora)
    .then((response) => {
          return dbBinnacle = response.docs.map((item) => {
          return {... item.data(), id: item.id};
       })
    })
    })();

    (() => {
      getDocs(tareas)
      .then((response) => {
            return dbTodos = response.docs.map((item) => {
            return {... item.data(), id: item.id};
         })
      })
      })();



 




      // const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_APIKEY,
  //   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_APP_ID,
  // };


