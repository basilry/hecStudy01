import React from 'react';
import { Link } from 'react-router-dom';


function Home () {
    return (
        <div>
            전체 홈페이지 - 스터디 회차별 링크 둘 것
            <Link to="/hecStudy01/Main">1회차</Link>
        </div>
    );
}


export default Home;