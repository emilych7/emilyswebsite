import React from "react";

export default function Experience() {

    return ( 
        
        <div className="flex flex-col xl:flex-row p-1 justify-center text-white size-fit bg-black border border-1 border-secondary rounded-xl">
            <div className="flex w-full xl:max-w-md justify-start px-10 p-4 items-center">
            <div className="h-fit w-full border-b border-white">
                <h1 className="text-secondary text-center xl:text-left size-full text-3xl md:text-4xl xl:text-5xl font-bold border-white border-b-4 py-3">Professional Experience</h1>
                </div>
                </div>

            <div className="flex flex-col overflow-y-scroll no-scrollbar max-w-3xl justify-center space-y-5 p-4">
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white ">
                        <h2 className="font-bold text-xl xl:text-2xl">Computer Lab Manager</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">Office of Information Technology at University of California - Merced</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-dotted py-1 px-3">
                            <h5 className="font-semi-bold text-md">Dec 2023 to Present</h5>
                            </div>
                        </div>
                        <p className="text-sm pt-3 pb-1">- Redesigned department webpages using HTML, CSS, and JavaScript to move away from text-heavy layouts and created a
shared structured menu for flow when presenting technical info to students.</p> <p className="text-sm py-1">- Managed Remote Lab infrastructure on AWS AppStream 2.0, troubleshooted virtual instance software, and handled licensing.</p> <p className="text-sm py-1">- Maintained a server-based imaging system, license renewals and services via LabMan, and automated software deployments for 250+ Windows systems using PowerShell.</p> <p className="text-sm py-1">- Led university-wide OS upgrade and hardware refresh by selecting, procuring, and deploying 155 NUCs and 167 monitors based on campus computing needs.</p>
                        <div className="flex flex-wrap space-x-4 space-y-2 pt-3">
                            <div className="flex flex-row text-sm justify-center items-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Amazon Web Services</h2>
                                <img className="size-5" src="../Amazon.svg" alt="AWS Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>PowerShell</h2>
                                <img className="size-5" src="../PowerShell.svg" alt="PowerShell Logo"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white">
                        <h2 className="font-bold text-xl xl:text-2xl">Intern in Software Development</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">Bay Valley Tech in Modesto, California</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">Sept 2023 to May 2024</h5>
                            </div>
                        </div>
                        <p className="text-sm pt-3 pb-1">- Created interactive components with JavaScript, React, and Next.JS for a web Discord clone application.</p> <p className="text-sm py-1">- Helped establish application assets by selecting icons and themes that balanced the project's identity with HCI design
principles.</p> <p className="text-sm py-1">- Spent time learning and implementing login/signup authorization for persistent user sessions in web applications.</p> <p className="text-sm py-1">- Worked with a team of developers to keep our project code organized and up to date using Git for version control.</p>
                        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap w-full space-x-4 sm:space-y-0 sm:space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>JavaScript</h2>
                                <img className="size-5" src="../JavaScript.svg" alt="JavaScript Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>React.JS</h2>
                                <img className="size-5" src="../React.svg" alt="React Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Next.JS</h2>
                                <img className="size-5" src="../Next.svg" alt="Next Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>HTML</h2>
                                <img className="size-5" src="../HTML.svg" alt="HTML Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>CSS</h2>
                                <img className="size-5" src="../CSS.svg" alt="AWS Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white ">
                        <h2 className="font-bold text-xl xl:text-2xl">Undergraduate Research Assistant</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">University of California Pavement Research Center in Davis, California</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">Feb 2020 to Dec 2020</h5>
                            </div>
                        </div>
                        <p className="text-sm pt-3 pb-1">- Supported pavement testing at the ATIRC track by monitoring the Heavy Vehicle Simulator, collecting temperature data, and logging field observations.</p> <p className="text-sm py-1">- Prepared and tested specimens of alternative materials such as low-carbon cements and recycled aggregates to confirm quality standards for CalTrans pilot projects.</p> <p className="text-sm py-1">- Assisted with general lab operations which included migrating lab data onto cloud storage methods to facilitate remote work during the pandemic. </p>
                        {/* <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>MATLAB</h2>
                                <img className="size-5" src="../MATLAB.svg" alt="AWS Logo"/>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white ">
                        <h2 className="font-bold text-xl xl:text-2xl">Research Assistant in Cardiovascular Tissue Engineering</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">Center for Cellular and Biomolecular Machines at University of California - Merced</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">May 2018 to Nov 2018</h5>
                            </div>
                        </div>
                        <p className="text-sm py-2">- Performed immunofluorescence imaging of differentiated embryonic stem cells, using TxRed, FITC, and DAPI dyes to visualize epithelial cells, nuclei, and cell membranes.</p> <p className="text-sm py-1">- Produced high-resolution composite images by merging and stitching three layers of image data.</p> <p className="text-sm py-1">- Cultured Mouse Embryonic Fibroblasts on hydrogel substrates to observe cell maturation.</p> <p className="text-sm py-1">- Presented a research poster at the NSF-CREST CCBM Open House to cover research experiences, results, and conclusion.</p> <p className="text-sm py-1">- Featured on Community Conversations with Roger Wood radio show to discuss the importance of STEM outreach at UCM.</p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <a href="https://docs.google.com/presentation/d/1sm7eizq6hOzT7gApIN5sDRZhRbstke7wxMVN6d3lJc4/edit?usp=sharing">
                            <div className="flex flex-row text-sm justify-center items-center space-x-1 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>See Poster</h2>
                                <img className="size-4" src="../External-Link.svg" alt="See Poster on Google Drive"/>
                            </div>
                            </a>

                            <a href="https://drive.google.com/file/d/1mivWaS0TbuPnt34ehRIYPwNDLW7ItTLH/view?usp=sharing">
                            <div className="flex flex-row text-sm justify-center items-center space-x-1 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Listen</h2>
                                <img className="size-4" src="../External-Link.svg" alt="Listen"/>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}