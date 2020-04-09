import React from 'react'
import '../App.css'
import NavBar from '../components/Nav'
import AboutSection from '../components/About'

const HomePage = () => {
    return (
        <div className="App">
            <NavBar />
            <AboutSection />
        </div>
    )
}

export default HomePage;