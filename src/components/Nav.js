import React from 'react'
import '../App.css'  
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div className='nav'>
            <h1>𝕲𝖆𝖒𝖊𝖘</h1>
            <ul className='list'>
                <Link to='/About' >
                <li>𝒜𝒷𝑜𝓊𝓉</li>
                </Link>
                <Link to='/Shop'>
                <li>𝒮𝒽𝑜𝓅</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
