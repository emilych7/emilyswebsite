import React from "react";

export default function Resume() {

    return (
        <div className="h-screen w-full lg:px-14 sm:px-10 no-scrollbar overflow-x-scroll text-secondary">
            <div className="text-4xl z-10 pb-1 font-bold text-center bg-primary border-b-2 border-accent sticky top-0">Experience</div>
            <div className="pt-3 px-4 sm:px-8 md:px-10 lg:px-12 pb-8">
                <div className="py-3 sm:py-2">
                    <div class="flex flex-col p-4 rounded-xl text-left transition ease-in-out delay-50 duration-200 text-white hover:scale-105 hover:bg-white hover:text-primary">
                        <h2 className="font-bold text-xl">Computer Lab Manager</h2>
                        <h4 className="font-semi-bold text-md py-1">Office of Information Technology at UC Merced</h4>
                        <p className="text-sm">Provided on-demand IT support for instructors during lecture and answered tickets using ServiceNow. Managed the building, testing, and deployment of virtual machines via Amazon Web Services for Remote Lab at UCM. Aligned with vendors for the repair and replacement of faulty hardware components and provided technology consultations. Performed software installations and license renewals for over 300 Windows computers. Using Powershell for task automation on Windows OS.</p>
                        <div className="flex flex-wrap sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
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
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-primary">
                        <h2 className="font-bold text-xl">Intern in Software Development</h2>
                        <h4 className="font-semi-bold text-md py-1">Bay Valley Tech | Modesto, California</h4>
                        <p className="text-sm">Designed 5+ projects using HTML, CSS, JavaScript, React.js, and Node.js. Coordinated with a team of 7 software developers to deliver projects within deadlines. Contributed to full-stack projects with a team of 5 following agile methodologies. Prioritized technology features based on user requirements and specifications.</p>
                        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap w-full py-3  space-x-4 sm:space-y-0 sm:space-x-4 pt-3">
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
                    <div class="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-primary">
                        <h2 className="font-bold text-xl">Undergraduate Research Assistant</h2>
                        <h4 className="font-semi-bold text-md py-1">University of California Pavement Research Center | UC Davis</h4>
                        <p className="text-sm">Collected hundreds of samples and prepared specimens of pavement related materials for testing. Analyzed data from current full-scale accelerated pavement tests using a Heavy Vehicle Simulator. Organized data observations into a quantitative log system for engineers and main operators. Filtered misplaced information for efficient company-wide access.</p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>MATLAB</h2>
                                <img className="size-5" src="../MATLAB.svg" alt="AWS Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-primary">
                        <h2 className="font-bold text-xl">Research Assistant in Cardiovascular Tissue Engineering</h2>
                        <h4 className="font-semi-bold text-md py-1">Center for Cellular and Biomolecular Machines at UC Merced</h4>
                        <p className="text-sm">Nurtured cell cultures with 3 dyes to identify cellular structures under fluorescence microscopy imaging. Composed layered microscopy images showing epithelial cells, nuclei, and cell membranes of cardiac tissue. Developed a presentation of research on stem cell images to a poster session hosted by National Science Foundation. Resulted in discussion of research on radio show “Community Conversations” with Roger Wood on KYOS. </p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>R and RStudio</h2>
                                <img className="size-5" src="../R.svg" alt="AWS Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-4xl z-10 pb-1 font-bold text-center bg-primary border-b-2 border-accent sticky top-0">Education</div>
            <div className="pt-3 px-4 sm:px-8 md:px-10 lg:px-12 pb-8">
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-primary">
                        <h2 className="flex flex-row justify-between font-bold text-xl">Master of Science in Computer Science</h2>
                        <h4 className="font-semi-bold text-md py-1">Georgia Institute of Technology</h4>
                        <p className="text-sm pb-3">Specialization in Interactive Intelligence</p>
                        <div className="w-fit flex flex-row text-sm justify-center space-x-1 bg-neutral rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Fall 2024 - Spring 2026</h2>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-primary">
                        <h2 className="flex flex-row justify-between font-bold text-xl">Bachelor of Arts in Psychology</h2>
                        <h4 className="font-semi-bold text-md py-1">University of California, Davis</h4>
                        <p className="text-sm pb-3">Relevant coursework in Calculus, Research Methods, Developmental Psychobiology, Cognitive Neuroscience</p>
                        <div className="w-fit flex flex-row text-sm justify-center space-x-1 bg-neutral rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Fall 2019 - Spring 2022</h2>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-primary">
                        <h2 className="flex flex-row justify-between font-bold text-xl">Supplemental Coursework</h2>
                        <h4 className="font-semi-bold text-md py-1">Merced College</h4>
                        <p className="text-sm pb-3">Computer Info Systems, Programming Concepts (Python), App Development and Programming (Python), Advanced C++ Programming, Linear Algebra, Statistics</p>
                        <div className="w-fit flex bg-neutral flex-row text-sm justify-center space-x-1 rounded-full shadow-md px-4 py-1 text-white">
                            <h2>Fall 2021 - Fall 2023</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}