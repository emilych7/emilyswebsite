"use client";
import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import MenuNavBar from "./Menu-Navbar";

export default function HomeNavbar() {

    return (
        <div className="drawer text-secondary">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="navbar">
                    <div className="flex-none">
                        <label  htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <Link href="/"><button className="btn btn-ghost text-xl">emily.chrisann</button></Link>
                    </div>
                    <div className="navbar-end flex flex-row pr-3">
                        <a className="btn btn-ghost btn-circle">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                fill="currentColor" 
                                className="bi bi-moon-fill" 
                                viewBox="0 0 16 16">
                                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                            </svg>
                        </a>
                        <a target="_blank" href="https://github.com/emilych7" className="btn btn-ghost btn-circle">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="-4 -4 24 24"
                                    className="fill-current">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                        <a className="btn btn-ghost btn-circle" target="_blank" href="http://www.linkedin.com/in/emilyhernandezprofile">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="45"
                                height="45"
                                viewBox="-4 -4 24 24"
                                className="fill-current">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu bg-white text-base-content min-h-full w-80">
                    <MenuNavBar />
                    <ul className="flex-col space-y-2">
                        <MenuItem name="ChatBot Component"/>
                        <MenuItem name="Ocean Gardens"/>
                        <MenuItem name="Discord Clone"/>
                        <MenuItem name="Personal Webiste"/>
                    </ul>
                </div>
            </div>
        </div>
        

        
    )
}