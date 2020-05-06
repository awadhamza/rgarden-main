import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import Landing from './Components/Landing/Landing';
import * as firebase from 'firebase/app';

export default function App() {
  return (
        <div class="outermost">
          <Navbar />
        </div>
  );
}
