import React from "react";
import Link from "next/link";

export default function MenuNavBar() {

    return(
        <div>
            <div className="navbar text-neutral-content">
                <Link href="/" ><button className="btn btn-sm btn-ghost text-xl">emily.chrisann</button></Link>
            </div>
        </div>
    )
}