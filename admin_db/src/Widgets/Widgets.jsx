import React from 'react'
import { MdOutlineTrendingDown } from 'react-icons/md'
import { MdOutlineTrendingUp } from 'react-icons/md'

import growth from "../Images/growth.png.png"
import "./widget.css"
import { useState } from 'react'
import styled from 'styled-components'

const Widgets = ({width}) => {
  const [isPositive, setIsPositive] = useState('true')

  const WidgetWrapper = styled.section`
   width: ${width};

   .widget-wrapper{
    width: fit-content;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid whitesmoke;
    border-radius: 8px;
    align-items: center;

    .left-item{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
   }

   

   `
  return (

    <WidgetWrapper>
      <div className='widget-wrapper'>

        <article className='left-item'>
          <span className='title'>Total Transaction (Naira)</span>
          <span className='amount'>#5,000,000,783</span>
          <span>
            {isPositive ? <MdOutlineTrendingUp /> : <MdOutlineTrendingDown />} 13% up from last week
          </span>
        </article>
        <div className='right-item'>
          <img src={growth} alt='' /> </div>
      </div>
    </WidgetWrapper>
  )
}

export default Widgets