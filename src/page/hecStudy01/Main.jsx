import React from "react"
import { Link } from "react-router-dom"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import Layout from "../../components/ui/Layout"

function Main() {
    return (
        <Layout>
            <div className="MainWhole">
                <Title>DOM :: Document Object Manipulation</Title>
                <Title>헥톤프로젝트 비전개발Z팀 목요 스터디 자료</Title>
                <SubTitls>Pro. 김바실리</SubTitls>
                <div className="MainBody">
                    <ul>
                        <li className="link">
                            <Link to="/hecStudy01/01_Basic">01_Basic</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/02_AtHtml">02_AtHtml</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/03_Quiz">03_Quiz</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/04_Control">04_Control</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/Final">05_참고자료</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Main
