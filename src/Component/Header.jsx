    import React from 'react'
    import { NavLink } from "react-router-dom"
    import '../App.css'; 
    
    export const Header = () => {
      return (
        <header>
        <nav>
            <ul>
                <li className='navLi'><NavLink to="/">Home</NavLink></li>
                <li className='navLi'><NavLink to="/About">About</NavLink></li>
                <li className='navLi'><NavLink to="/Contact">Contact</NavLink></li>
                <li className='navLi'><NavLink to="/Registration">Registration</NavLink></li>
            </ul>
        </nav>
    </header>
      )
    }
    