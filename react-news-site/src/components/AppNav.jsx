import {Link} from 'react-router-dom'
import { useState } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Search from './Search'

import sections from '../data/sections.json' //data


function AppNav (props){

    const[navItems, setNavItems] = useState(sections)  
    
    return(
        <Navbar> 
            <Navbar.Brand>
                <img src="https://www.codeplatoon.org/wp-content/uploads/2018/10/CP-logo-2018-abbrev-1.png" width="60" />
                CP News
            </Navbar.Brand>
            <Nav>
                <Nav.Link href='/'>
                    HOME
                </Nav.Link>
                {
                    navItems.map(((navItem, index) => {
                        return(
                            <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={() => console.log(navItem.value)}> 
                                {navItem.label}
                            </Nav.Link>
                        )
                    }))
                }
            </Nav>
        </Navbar>
    )
}
export default AppNav;