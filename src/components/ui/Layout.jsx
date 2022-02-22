import React, { useState } from "react"
import Nav from "./Nav"
import "../../style/Layout.scss"
import { Link } from "react-router-dom"

function Layout({ children }) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Nav open={open} setOpen={setOpen} />
            <div className={open ? "sideBar_whole" : "sideBar_none"}>
                <ul>
                    <li>
                        <Link to="/hecStudy01">Home</Link>
                    </li>
                    <li>
                        <Link to="/hecStudy01/study01/Main">1회차 발표자료 :: DOM</Link>
                    </li>
                    <li>
                        <Link to="/hecStudy01/study02/Main">2회차 발표자료 :: Redux</Link>
                    </li>
                </ul>
                <div>©2022. 김바실리 all rights reserved.</div>
            </div>
            <div style={{paddingTop: "100px"}}>
            {children}
            </div>
            <div className="topBtn" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                <div>Top👆</div>
            </div>
        </div>
    )
}

export default Layout
