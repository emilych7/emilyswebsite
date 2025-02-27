"use client";
import React from "react";

export default function ContactForm() {

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4768704b-7523-434d-a9a2-cc81c0dc774d");

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
            <div className="text-secondary w-full h-full justify-center flex items-center pt-6 px-8 sm:px-10 text-center">
                <div className="h-4/6 justify-center">
                <div className="text-center pb-4 flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-6xl sm:text-7xl font-bold">Let's chat!</h1>
                    <p className="sm:w-4/6 py-5 px-4 sm:px-12">I am currently open to taking on new projects. If you are interested in working together, send a message!</p>
                </div>
                <form  className="text-sm flex flex-col items-center space-y-4 h-fit" onSubmit={handleSubmit}>
                    <div className="w-fit space-x-6 flex flex-row">
                        <input className="w-1/2 px-3 py-2 input-bordered input-success rounded-xl border-none" type="text" placeholder="First Name" name="name" required/>
                        <input className="w-1/2 px-3 py-2 input-bordered input-success rounded-xl border-none" type="text" placeholder="Last Name" name="name" required/>
                    </div>
                    <div className="w-fit space-x-6 flex flex-row">
                        <input className="w-1/2 px-3 py-2 input-bordered input-success rounded-xl border-none" type="text" placeholder="Email Address" name="email" required/>
                        <input className="w-1/2 px-3 py-2 input-bordered input-success rounded-xl border-none" type="text" placeholder="Phone Number" name="phone" required/>
                    </div>
                    <div className="pb-2">
                        <textarea className="w-72 sm:w-90 md:w-96 h-4/5 input-bordered input-success rounded-xl border-none p-3" name="message" placeholder="Your message" required></textarea>
                    </div>
                    <button className="btn btn-circle w-1/3 sm:w-60 border-none bg-accent text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ..." type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}