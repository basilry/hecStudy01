import React from 'react'

function Title({children}){
    return(
        <div className="Title" style={{ margin: "20px", fontSize: "40px", fontWeight: "600" }}>
            {children}
        </div>
    )
}

export default Title;