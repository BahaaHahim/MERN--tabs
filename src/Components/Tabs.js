import React from 'react'
import {useState} from 'react';


const Tabs = (props) => {
    const [state , setState] = useState("");

    const handelTab = (e, value) =>{
        e.preventDefault();
        setState(value);


    }
    return (
        <>
        {
            props.tabs.map((item,index) =>{
                return <button onClick= {(e) =>handelTab(e, item.content)}> {item.label}</button>
            })
        }
        <p>{state}</p>

        </>
    )

}
export default Tabs;