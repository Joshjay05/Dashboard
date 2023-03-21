import React from 'react'
import "./sidebar.css"
// import logout "./Images/heroicons.png"
import logout from "../Images/heroicons-outline_logout.png"

const Sidebar = ({sbData}) => {
  return (
 <aside className='sidebar'>
       <ul>
    <section className='aside-list'> 
    {sbData.map((sbData)=>{
return(
<li className='list'>{sbData.icon}<span>{sbData.Tag}</span></li>
)})}
        </section>
<article className="bottom-sb">
<div className='admin'>
    <span className='log'>Logout</span>
    <span className='admin-s'>super Admin</span>
</div>
<div className='logout'>
<img src={logout} alt=''/> 
</div>
</article>
    </ul>
 </aside>
  )
}

export default Sidebar