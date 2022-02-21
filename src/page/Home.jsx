import React from "react"
import { Link } from "react-router-dom"
import SubTitls from "../components/SubTitls"
import Title from "../components/Title"
import Layout from "../components/ui/Layout"
import styles from "../style/Home.scss"

function Home() {
    return (
        <Layout>
            <div className="Home_whole">
                <Title>헥톤프로젝트 비전개발Z팀 목요 스터디 자료</Title>
                <SubTitls>Pro. 김바실리</SubTitls>
                <ul>
                    <li>
                        <Link to="/hecStudy01/study01/Main">1회차 발표 :: DOM</Link>
                    </li>
                    <li>
                        <Link to="/hecStudy01/study02/Main">2회차 발표 :: Redux</Link>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default Home
