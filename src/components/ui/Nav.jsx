import React, { useState } from 'react';
import "../../style/Nav.scss"


function Nav ({open, setOpen}) {

    return (
        <div className="Nav_whole">
            <div className="hamberger" onClick={() => setOpen(!open)}>
                <p>🍔</p>
            </div>
        </div>
    );
}


export default Nav;