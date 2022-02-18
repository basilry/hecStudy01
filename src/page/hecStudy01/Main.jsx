import React from "react"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import Basic from "./01_Basic"
import AtHtml from "./02_AtHtml"
import Quiz from "./03_Quiz"
import Control from "./04_Control"
import Final from "./Final"


function Main() {
    return (
        <div className="MainWhole">
            <Title>DOM :: Document Object Manipulation</Title>
            <Title>헥톤프로젝트 비전개발Z팀 목요 스터디 자료</Title>
            <SubTitls>Pro. 김바실리</SubTitls>
            <div className="MainBody">
                <ul>
                    <li className="link">
                        <Link to="/01_Basic">01_Basic</Link>
                    </li>
                    <li className="link">
                        <Link to="/02_AtHtml">02_AtHtml</Link>
                    </li>
                    <li className="link">
                        <Link to="/03_Quiz">03_Quiz</Link>
                    </li>
                    <li className="link">
                        <Link to="/04_Control">04_Control</Link>
                    </li>
                    <li className="link">
                        <Link to="/Final">05_참고자료</Link>
                    </li>
                </ul>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/01_Basic" element={<Basic />} />
                    <Route path="/02_AtHtml" element={<AtHtml />} />
                    <Route path="/03_Quiz" element={<Quiz />} />
                    <Route path="/04_Control" element={<Control />} />
                    <Route path="/Final" element={<Final />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main
