import React from "react";
import './scroll.css'

const Scroll = (props)=>{
    return(
        <div className='scroll' style={{overflow: 'scroll', border: '5px solid #333', height: '900px' }}>
            {props.children}
        </div>
    )
}
export default Scroll;