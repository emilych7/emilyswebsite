import React from "react";

export default function Experience() {

    return (
        <div className="flex flex-col xl:flex-row size-full py-12 justify-center items-center text-white space-x-5">
            <div className="flex w-full xl:w-1/5 justify-center">
                <h1 className="text-secondary text-center size-full text-2xl xl:text-5xl font-bold border-white border-b-4 p-3">Professional Experience</h1></div>
            <div className="flex flex-col w-full xl:w-3/5 h-5/6 overflow-y-scroll no-scrollbar px-3 xl:p-11">
                <div className="py-3 sm:py-2">
                    <div class="flex flex-col p-4 rounded-xl text-left transition ease-in-out delay-50 duration-200 text-white hover:scale-105 hover:bg-white hover:text-black">
                        <h2 className="font-bold text-2xl xl:text-3xl">Computer Lab Manager</h2>
                        <h4 className="font-semi-bold text-lg py-1">Office of Information Technology at UC Merced</h4>
                        <p className="text-sm">Provided on-demand technical support for faculty and staff using ServiceNow ticketing system. Managed the building, testing, and deployment of virtual machines via Amazon Web Services for Remote Lab at UCM. Aligned with vendors to replace faulty hardware components and gather quotes for university-wide software renewals. Automated annual and semi-annual software installations and license renewals for over 300 Windows computers.</p>
                        <div className="flex flex-wrap sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
                            <div className="flex flex-row font-semi-bold text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Amazon Web Services</h2>
                                <img className="size-5" src="../Amazon.svg" alt="AWS Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>PowerShell</h2>
                                <img className="size-5" src="../PowerShell.svg" alt="PowerShell Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-black">
                        <h2 className="font-bold text-2xl xl:text-3xl">Intern in Software Development</h2>
                        <h4 className="font-semi-bold text-lg py-1">Bay Valley Tech | Modesto, California</h4>
                        <p className="text-sm">Designed responsive UI components using JavaScript, HTML, CSS, and React.js. Implemented authentication and authorization methods using middleware for Node.js. Facilitated the release of new features using Git for version control and participated in code reviews on GitHub. Prioritized cross-browser compatibility, responsiveness, and accessibility of web applications to enhance the user experience.</p>
                        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap w-full space-x-4 sm:space-y-0 sm:space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>JavaScript</h2>
                                <img className="size-5" src="../JavaScript.svg" alt="JavaScript Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>React.JS</h2>
                                <img className="size-5" src="../React.svg" alt="React Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Next.JS</h2>
                                <img className="size-5" src="../Next.svg" alt="Next Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>HTML</h2>
                                <img className="size-5" src="../HTML.svg" alt="HTML Logo"/>
                            </div>
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>CSS</h2>
                                <img className="size-5" src="../CSS.svg" alt="AWS Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2">
                    <div class="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-black">
                        <h2 className="font-bold text-2xl xl:text-3xl">Undergraduate Research Assistant</h2>
                        <h4 className="font-semi-bold text-lg py-1">University of California Pavement Research Center | UC Davis</h4>
                        <p className="text-sm">Collected hundreds of samples and prepared specimens of pavement related materials for testing. Utilized MATLAB for data analysis of full-scale accelerated pavement tests conducted with a Heavy Vehicle Simulator. Organized data observations into a quantitative log system for data interpretation by engineers and main operators. Optimized data accessibility and accuracy by refining and updating file structures existing for over 10 years.</p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>MATLAB</h2>
                                <img className="size-5" src="../MATLAB.svg" alt="AWS Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-black">
                        <h2 className="font-bold text-2xl xl:text-3xl">Research Assistant in Cardiovascular Tissue Engineering</h2>
                        <h4 className="font-semi-bold text-lg py-1">Center for Cellular and Biomolecular Machines at UC Merced</h4>
                        <p className="text-sm">Cultivated cell cultures with various dyes to distinguish cellular structures for precise fluorescence microscopy imaging. Generated visual data of layered microscopy images showing epithelial cells, nuclei, and cell membranes of cardiac tissue. Presented research on stem cell imaging to a poster session sponsored by CCBM and the National Science Foundation (NSF). Featured guest discussing my research experience on radio show “Community Conversations” with Roger Wood on KYOS. </p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>R and RStudio</h2>
                                <img className="size-5" src="../R.svg" alt="AWS Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}