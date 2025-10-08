"use client";
import Image from "next/image";
import Figma from "../../../public/figma.svg";
import ExternalLink from "../../../public/External-Link.svg";
import { useState } from "react";

export default function UCMProjectOverview(props) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle the dropdown state
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Down arrow icon
    const ChevronDown = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="#FFFFFF">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );

    // Up arrow icon
    const ChevronUp = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="#FFFFFF">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
    );

    const ChevronIcon = ChevronDown;

    return (
        <div className="flex flex-col sm:flex-row size-fit items-center justify-center text-white space-x-2 space-y-5 bg-black border border-1 border-secondary rounded-xl">
            <div className="max-w-2xl flex flex-col items-center justify-center space-y-5 p-8 sm:p-7 lg:p-10">
                <div className="text-left w-full text-3xl xl:text-5xl font-bold">
                    {props.title}
                </div>
                <div className="text-left xl:pt-3 text-md">
                    {props.description}
                </div>
                <div className="w-full flex sm:flex-row space-x-3">
                    <div className=" flex w-full flex-col space-y-4">
                        <div className="w-full text-left"> 
                            {/* Main Button/Toggle */}
                            <button
                                type="button"
                                className="btn border-2 w-full border-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:scale-105 duration-200 flex items-center hover:border-2 hover:border-accent"
                                onClick={toggleDropdown}
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <p className=" ">View web page</p>
                                <span className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
  <ChevronIcon />
</span>
                            </button>

                            {/* Dropdown Menu */}
                            <div
  className={`w-full shadow-sm flex flex-col rounded-md overflow-hidden transition-all duration-300 ease-in-out
    ${isDropdownOpen ? 'mt-2 max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
  `}
  aria-hidden={!isDropdownOpen}
>
  {/* Button 1 */}
  <a
    className="py-3 px-5 flex flex-row space-x-5 border-b border-white text-white text-sm transition ease-in-out delay-50 hover:bg-secondary "
    href={props.webpage1}
    target="_blank"
  >
    <p className="w-full text-left">OIT-Managed Computer Labs</p>
    <Image src={ExternalLink} width="20" height="20" alt="External link" />
  </a>

  {/* Button 2 */}
  <a
    className="py-3 px-5 flex flex-row space-x-5 border-b border-white text-white text-sm transition ease-in-out delay-50 hover:bg-secondary "
    href={props.webpage2}
    target="_blank"
  >
    <p className="w-full text-left">Remote Lab</p>
    <Image src={ExternalLink} width="20" height="20" alt="External link" />
  </a>

  {/* Button 3 */}
  <a
    className="py-3 px-5 flex flex-row space-x-5 text-white text-sm transition ease-in-out delay-50 hover:bg-secondary"
    href={props.webpage3}
    target="_blank"
  >
    <p className="w-full text-left">Requesting Software</p>
    <Image src={ExternalLink} width="20" height="20" alt="External link" />
  </a>
</div>

                        </div>
                    <a className="btn border-none bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary hover:scale-105 duration-200 ..."  href={props.Figma} target="_blank">
                            <p className=" ">View on Figma</p>
                                <Image
                                        src={Figma}
                                        width="40"
                                        height="40"
                                        alt="Figma Logo">
                            </Image>
                        </a>
                    </div>
                </div>
                <div className="w-full"><p style={{ fontStyle: 'italic' }}>{props.tools}</p></div>
            </div>
            <div className="flex max-w-3xl show-on-desktop p-3">
            <div class="flex px-8 py-5 place-content-center">
                            <div clasName="">
                                <div>
                                    <Image className="h-auto max-w-full rounded-lg " src={props.ImageOne} alt="Image One"/>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}