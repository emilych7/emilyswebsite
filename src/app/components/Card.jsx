import React from "react";

export default function Card(props) {
    
    return (
        <div id={props.id} className="bg-secondary card shadow-xl w-full">
            <img src={"../../" + props.imageName} />
            <div className="card-body flex flex-col">
                <h2 className="card-title">{props.cardTitle}</h2>
                <p>{props.cardText}</p>
                <div className="justify-end card-actions">
                    <a target="_blank" href={props.link} className="btn w-40 btn-primary">Test</a>
                </div>
            </div>
        </div>
    )
}