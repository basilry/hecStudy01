import React, { useState } from 'react';
import "../../style/Nav.scss"


function Nav ({open, setOpen}) {

    return (
        <div className="Nav_whole">
            <div className="hamberger" >
                <p onClick={() => setOpen(!open)}>🍔</p>
            </div>
        </div>
    );
}


export default Nav;