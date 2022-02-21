import React from 'react'

function Title({children}){
    return(
        <div className="Title" style={{ margin: "20px", fontSize: "40px", fontWeight: "600", color: "#00aa6c" }}>
            {children}
        </div>
    )
}

export default Title;