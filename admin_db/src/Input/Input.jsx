import React from "react";
import  "./input.css"

const Input = ({props}) =>{
    return(
        <section className="search">
        <input type="text"  placeholder={props}/>
        <img src="" alt=""/>
        </section>
    )

}

export default Input;
