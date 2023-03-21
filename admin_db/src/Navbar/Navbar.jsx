import React from 'react'
import { CiSearch } from "react-icons/ci"
import {BsBell} from "react-icons/bs"
import Input from '../Input/Input'
import avatar from "../Images/phone.png"
import "./navbar.css"

const Navbar = () => {
    let holder = { 
        placeholder: "Search Terminals ID, Agents and Agent Managers",};

  return (
    <section className='Nav_bar'>

      <wrapper className="wrapper">
      <h1>Dashboard</h1>
        <article className='search'>
        <Input props={holder.placeholder}  />
        <CiSearch className='s-icon'/>
        </article>
        <section className='right'>
<article className='left'>
  <div><BsBell className='b-icon'/> </div>
  <div className='counter'></div>
</article>

<div className='image-box'>
  <img src={avatar} className="image" alt=""/>
</div>
{/* admin */}
<div className='rgt'>
<span className='user'>Segun Peters </span>
<span className='s-admin'>Super Agent</span>
</div>
    </section>
      </wrapper>
    </section>
  )
}

export default Navbar