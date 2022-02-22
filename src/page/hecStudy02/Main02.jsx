import React from "react"
import { Link } from "react-router-dom"
import Title from "../../components/Title"
import Layout from "../../components/ui/Layout"

function Main02() {
    return (
        <Layout>
            <div className="MainWhole">
                <Title>헥톤프로젝트 목요스터디 2회차 발표자료</Title>
                <Title>
                    <p style={{ color: "rgb(186, 143, 255)" }}>Redux</p>
                </Title>
                <div className="MainBody">
                    <ul>
                        <li className="link">
                            <Link to="/hecStudy01/study02/01_Basic">01_Basic</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/study02/02_ReduxExample">02_ReduxExample</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/study02/03_ReactRedux">03_ReactReudx</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/study02/04_Middleware">04_Middleware</Link>
                        </li>
                        <li className="link">
                            <Link to="/hecStudy01/study02/Final">05_참고자료</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Main02
