import React from "react";

export default function Experience() {

    return (
        <div className="flex flex-col xl:flex-row h-fit p-1 justify-center items-center text-white space-x-5">
            <div className="flex w-full xl:w-1/5 justify-center px-2">
                <h1 className="text-secondary size-full text-3xl font-bold border-white border-b-4 pt-12">Professional Experience</h1></div>
            <div className="flex flex-col max-w-5xl overflow-y-scroll no-scrollbar py-5">
                <div className="w-full pb-2">
                    <div className="flex flex-col p-3 rounded-xl text-left transition ease-in-out duration-150 text-white hover:bg-white hover:text-black">
                        <h2 className="font-bold text-xl xl:text-2xl">Computer Lab Manager</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">Office of Information Technology at University of California - Merced</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-dotted py-1 px-3">
                            <h5 className="font-semi-bold text-md">Dec 2023 to Present</h5>
                            </div>
                        </div>
                        <p className="text-sm py-2">Led a university-wide hardware refresh by selecting, procuring, and deploying 167 ASUS NUC workstations and Dell monitors, ensuring Windows 11 compatibility and adherence to budget. Managed Remote Lab infrastructure via AWS (AppStream 2.0, Athena), overseeing deployment and maintenance of virtual instances to support teaching and research. Administered server-based imaging and license renewals, streamlining system maintenance and ensuring consistent uptime for academic labs. Automated annual and semi-annual software deployments and licensing for 300+ Windows systems across campus.</p>
                        <div className="flex flex-wrap space-x-4 space-y-2 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-accent rounded-full shadow-md px-4 py-1 text-white">
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
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white hover:bg-white hover:text-black">
                        <h2 className="font-bold text-xl xl:text-2xl">Intern in Software Development</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">Bay Valley Tech in Modesto, California</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">Sept 2023 to May 2024</h5>
                            </div>
                        </div>
                        <p className="text-sm py-2">Designed responsive UI components using JavaScript, HTML, CSS, and React.js. Implemented authentication and authorization methods using middleware for Node.js. Facilitated the release of new features using Git for version control and participated in code reviews on GitHub. Prioritized cross-browser compatibility, responsiveness, and accessibility of web applications to enhance the user experience.</p>
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
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white hover:bg-white hover:text-black">
                        <h2 className="font-bold text-xl xl:text-2xl">Undergraduate Research Assistant</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">University of California Pavement Research Center in Davis, California</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">Feb 2020 to Dec 2020</h5>
                            </div>
                        </div>
                        <p className="text-sm py-2">Collected hundreds of samples and prepared specimens of pavement related materials for testing. Utilized MATLAB for data analysis of full-scale accelerated pavement tests conducted with a Heavy Vehicle Simulator. Organized data observations into a quantitative log system for data interpretation by engineers and main operators. Optimized data accessibility and accuracy by refining and updating file structures existing for over 10 years.</p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-accent rounded-full shadow-md px-4 py-1 text-white">
                                <h2>MATLAB</h2>
                                <img className="size-5" src="../MATLAB.svg" alt="AWS Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white hover:bg-white hover:text-black">
                        <h2 className="font-bold text-xl xl:text-2xl">Research Assistant in Cardiovascular Tissue Engineering</h2>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <h4 className="font-semi-bold text-lg py-1">Center for Cellular and Biomolecular Machines at University of California - Merced</h4>
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">May 2018 to Nov 2018</h5>
                            </div>
                        </div>
                        <p className="text-sm py-2">Cultivated cell cultures with various dyes to distinguish cellular structures for precise fluorescence microscopy imaging. Generated visual data of layered microscopy images showing epithelial cells, nuclei, and cell membranes of cardiac tissue. Presented research on stem cell imaging to a poster session sponsored by CCBM and the National Science Foundation (NSF). Featured guest discussing my research experience on radio show “Community Conversations” with Roger Wood on KYOS. </p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-accent rounded-full shadow-md px-4 py-1 text-white">
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