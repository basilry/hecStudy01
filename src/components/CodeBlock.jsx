import React from 'react'

function CodeBlock({children}){
    return(
      <div style={{ margin: "20px", fontSize: "18px", backgroundColor:  "rgb(223, 209, 183)", padding: "20px", color: "#CD1818"}}>
      {children}
  </div>
    )
}

export default CodeBlock;