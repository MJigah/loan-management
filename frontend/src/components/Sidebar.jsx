import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt
}from "react-icons/fa";
import {
    GoSignIn
}from "react-icons/go";
import { GiEntryDoor } from "react-icons/gi"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        // {
        //     path:"/about",
        //     name:"About",
        //     icon:<FaUserAlt/>
        // },
        {
            path:"/loan",
            name:"Request Loan",
            icon:<FaRegChartBar/>
        },
        // {
        //     path:"/comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        {
            path:"/login",
            name:"Login",
            icon:<GoSignIn/>
        },
        {
            path:"/signup",
            name:"Register",
            icon:<GiEntryDoor/>
        }
    ]
    return (
        <div className="container" style={{position: "relative"}}>
           <div 
           style={{width: isOpen ? "200px" : "50px", position: isOpen ? "absolute" : "initial", height: isOpen ? "100%" : "initial"}} 
           className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;