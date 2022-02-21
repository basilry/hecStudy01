import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import Layout from '../../components/ui/Layout';


function Main02 () {
    return (
        <Layout>
            <div className="MainWhole">
                <Title>헥톤프로젝트 목요스터디 2회차 발표자료</Title>
                <Title>Redux</Title>
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
    );
}


export default Main02;