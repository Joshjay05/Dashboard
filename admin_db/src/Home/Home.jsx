import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import {IoMdArrowDropdown} from "react-icons/io"
import Widgets from '../Widgets/Widgets'
import line from "../Images/Path.png"
// import Terminal from '../Terminals/Terminal'
import Chart from '../Charts/Chart'
// import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  const widgetdata =[
    {
      id:1,
      title: '',
      amount: ''
    

    }
  ]
   
  const data = [
    {
      id:1,
      title:'Terminals',
      amount:'64%',
      icon: 'line'
    },
    {
      id:2,
      title:'Terminals',
      amount:'64%',
      icon: 'line'
    },
    {
      id:3,
      title:'Terminals',
      amount:'86%',
      icon: 'line'
    },
    {
      id:4,
      title:'Terminals',
      amount:'+34%',
      icon: 'line'
    },
    {
      id:5,
      title:'Terminals',
      amount:'64%',
      
    },
    {
      id:6,
      title:'Terminals',
      amount:'',
     
    },
    {
      id:7,
      title:'Terminals',
      amount:'501/Min',
      
    },
    {
      id:8,
      title:'Terminals',
      amount:'90/150',
     
    },
    {
      id:9,
      title:'Av.Session Length',
      amount:'2m 34s',
      
    }
  ]
  return (
    <div className='Body-container'>
      <Navbar />
      <section className='entry'>
        <span className='heading'>Timeframe:All-time <IoMdArrowDropdown/></span>
        <span className='heading'>User Roles:All <IoMdArrowDropdown/></span>
        <span className='heading'>Region(Location):All <IoMdArrowDropdown/></span>
        <span></span>
      </section>

      <section className='widget-section'>
        <Widgets title='Total transaction'  width='200px'/>
        <Widgets width='200px'/>
        <Widgets width='200px'/>
        <Widgets width='200px'/>
        <Widgets width='200px'/>
        <Widgets width='200px'/>
        <Widgets width='200px'/>
        <Widgets width='200px'/>
       
      </section>
      <section className='investment'>
        <artticle className="charts">
          <div className='chart-title'>
            <snpa>Transactional Activities</snpa>
            <span>Month<IoMdArrowDropdown/></span>
          </div>
          <div>
          <Chart/>

          </div>
             </artticle>
        <article className='revenue'>
        
        <section className='right-rev'>

        <div className='terminal'>

    <span>Terminals</span>
    <p>64%</p>
    <div>
      <img src={line} alt='' />
    </div>
    </div>
    <div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  <img src={line} alt='' />
</div>
</div>
<div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  <img src={line} alt='' />
</div>
</div>
<div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  {/* <img src={line} alt='' /> */}
</div>
</div>
<div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  {/* <img src={line} alt='' /> */}
</div>
</div>
<div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  {/* <img src={line} alt='' /> */}
</div>
</div>
<div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  {/* <img src={line} alt='' /> */}
</div>
</div>
<div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  {/* <img src={line} alt='' /> */}
</div>
</div>
<div className='terminal'>

<span>Terminals</span>
<p>64%</p>
<div>
  {/* <img src={line} alt='' /> */}
</div>
</div>
</section>
        </article>
      </section>

      {/*  */}

      {/* <Table/> */}
    </div>
  )
}

export default Home