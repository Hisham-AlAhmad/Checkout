import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Steps from './components/Steps';
import Payment from './components/Payment/Payment';
import Contact from './components/Contact';

function App() {
    return(
        <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Steps/>
        <Payment/>
        <Contact/>
        </div>
    )
}
export default App