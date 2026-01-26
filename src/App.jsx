import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Steps from './components/Steps';
import Contact from './components/Contact';
function App() {
    return(
        <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Steps/>
        <Contact/>
        </div>
    )
}
export default App