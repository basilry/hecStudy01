import React from 'react'

function Paragraph({children}){
    return(
        <div style={{ margin: "20px", fontSize: "18px" }}>
            {children}
        </div>
    )
}

export default Paragraph;