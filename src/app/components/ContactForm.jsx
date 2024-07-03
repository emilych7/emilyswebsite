"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
    
    return (
        <div className="text-secondary h-screen flex flex-row-reverse">
            <div className="h-full w-1/2 justify-center flex flex-col pt-10 px-8 text-center w-1/2">
                <div className="text-center pt-8 pb-4 flex flex-col justify-center">
                    <h1 className="pt-10 text-6xl font-bold">Let's chat!</h1>
                    <p className="pt-5">I am currently open to taking on new projects. If you are interested in working together, send a message!</p>
                </div>
                <form  className="flex flex-col items-center space-y-4 h-3/5 rounded-xl" onSubmit={handleSubmit}>
                    <div className="space-x-8 flex flex-row">
                        <input className="px-2 py-5 input-bordered input-success rounded-xl border-none" type="text" placeholder="First Name" name="name"/>
                        <input className="px-2 py-5 input-bordered input-success rounded-xl border-none" type="text" placeholder="Last Name" name="name"/>
                    </div>
                    <div className="space-x-8 flex flex-row">
                        <input className="px-2 py-5 input-bordered input-success rounded-xl border-none" type="text" placeholder="Email Address" name="email"/>
                        <input className="px-2 py-5 input-bordered input-success rounded-xl border-none" type="text" placeholder="Phone Number" name="phone"/>
                    </div>
                    <textarea className="w-96 h-1/4 input-bordered input-success rounded-xl border-none p-3" name="message" placeholder="Your message"></textarea>
                    <br></br>
                    <button className="btn btn-md  rounded-lg border-none" type="submit">Submit Form</button>
                </form>
            </div>
            <div className="h-full w-1/2 flex flex-row items-center justify-center">
                <img className="rounded-xl w-4/6" src="../Emily.png" />
            </div>
        </div>
    )
}