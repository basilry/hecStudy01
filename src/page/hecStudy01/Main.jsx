import React from "react"
import { Link } from "react-router-dom"
import SubTitls from "../../components/SubTitls"
import Title from "../../components/Title"
import Layout from "../../components/ui/Layout"

function Main() {
    return (
        <Layout>
            <div className="MainWhole">
                <Title>헥톤프로젝트 목요스터디 1회차 발표자료</Title>
                <Title>DOM :: Document Object Manipulation</Title>
                <div className="MainBody">
                    <ul>
                        <li className="link">
                            <Link to="/study01/01_Basic">01_Basic</Link>
                        </li>
                        <li className="link">
                            <Link to="/study01/02_AtHtml">02_AtHtml</Link>
                        </li>
                        <li className="link">
                            <Link to="/study01/03_Quiz">03_Quiz</Link>
                        </li>
                        <li className="link">
                            <Link to="/study01/04_Control">04_Control</Link>
                        </li>
                        <li className="link">
                            <Link to="/study01/Final">05_참고자료</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Main
