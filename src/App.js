import React, { useState, useRef } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCrSZXU-8UnKyBVZ2K7VTWQ5Wil7kY1nxI",
  authDomain: "chat-11f5e.firebaseapp.com",
  databaseURL: "https://chat-11f5e.firebaseio.com",
  projectId: "chat-11f5e",
  storageBucket: "chat-11f5e.appspot.com",
  messagingSenderId: "875437241790",
  appId: "1:875437241790:web:83369f76ff254d185ff5ef"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="App">
      <div className="background"></div>
      {user && (
        <header className="header">
          <div className="user">
            <img src={user.photoURL} alt='' />
            <span>{user.displayName}</span>
          </div>
          <SignOut />
        </header>
      )}
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button className="signin" onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button  className="signout" onClick={() => auth.signOut()}>Sign out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');
  const sendMessage = async(event) => {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className="chat">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div className="dummy" ref={dummy}></div>
      </div>
      <label className="wrapper">
        <form className="form">
          <input value={formValue} onChange={event => setFormValue(event.target.value)} />
          <button onClick={sendMessage}>Send</button>
        </form>
      </label>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`} title="yo">
      <img src={photoURL} alt='' />
      <span>{text}</span>
    </div>
  )
}

export default App;
