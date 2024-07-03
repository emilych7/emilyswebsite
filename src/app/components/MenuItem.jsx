import React from "react";

export default function MenuItem(props) {

    return (
        <li>
            <button className="text-7 p-5">{props.name}</button>
        </li>   
    )
}