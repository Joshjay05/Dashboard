import React from 'react'
// import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
// import { FaBeer} from "react-icons/fa"
// import {DashboardIcon} from '@mui/icons-material/Dashboard';
import {MdDashboard} from "react-icons/md"
 import {MdOutlineSupervisorAccount} from "react-icons/md"
 import {MdOutlinePeopleOutline} from "react-icons/md"
 import {MdOutlineTab} from "react-icons/md"
 import {MdPersonOutline} from "react-icons/md"
 import {FcComboChart} from "react-icons/fc"
import Home from '../Home/Home'
import "./homepage.css"

const Homepage = () => {
  const sbData =[
    {
      id:1,
      Tag:"Dashboard",
      icon:<MdDashboard/>,
    },
    {
      id:2,
      Tag:"My Account",
      icon:<MdOutlineSupervisorAccount/>,
    },
    {
      id:3,
      Tag:"Agent Management",
      icon:<MdOutlinePeopleOutline/>,
    },
    {
      id:4,
      Tag:"Terminal Management",
      icon:<MdPersonOutline/>,
    },
    {
      id:5,
      Tag:"Service Management",
      icon:<MdOutlineTab/>,
    },
    {
      id:6,
      Tag:"Providers",
      icon:<MdOutlineTab/>,
    },
    {
      id:7,
      Tag:"Rental services",
      icon:<MdOutlineTab/>,
    },
    {
      id:8,
      Tag:"Reporting",
      icon:<FcComboChart/>,
    },
    {
      id:9,
      Tag:"Settings",
      icon:<MdOutlineTab/>,
    }
  ]
  return (
    <div className='container'>
      <section className='aside'>
<Sidebar sbData={sbData} key={sbData.id}/>
      </section>
      <section className='home'>
       <Home/>
      </section>
    </div>
  )
}

export default Homepage