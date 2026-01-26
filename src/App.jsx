import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Steps from './components/Steps';
function App() {
    return(
        <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Steps/>
        </div>
    );
}
export default App