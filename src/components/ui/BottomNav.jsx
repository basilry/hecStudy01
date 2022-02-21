import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BottomNav(props) {
    console.log(props);
    const { children1, children2 } = props;

    const [child, setChild] = useState("");
    const [child2, setChild2] = useState("");

    useEffect(() => {
        if (children1 === "Main") {
            setChild("hecStudy01");
        } else {
            setChild(children1);
        }
    }, [children1]);

    useEffect(() => {
        if (children2 === "Main") {
            setChild2("hecStudy01");
        } else {
            setChild2(children2);
        }
    }, [children2]);

    return (
        <div
            style={{
                marginBottom: "50px",
                display: "flex",
                justifyContent: "right",
                fontSize: "25px",
                fontWeight: "600",
                zIndex: "100"
            }}
        >
            <div style={{marginRight: "50px"}} className="link" onClick={() => window.scrollTo(0, 0)}>
                <Link to={`/${child}`}>{`< ${children1.split("/")[1]}`}</Link>
            </div>
            <div className="link" onClick={() => window.scrollTo(0, 0)}>
                <Link to={`/${child2}`}>{`${children2.split("/")[1]} >`}</Link>
            </div>
        </div>
    );
}

export default BottomNav;
