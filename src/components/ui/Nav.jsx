import React, { useState } from 'react';
import "../../style/Nav.scss"


function Nav () {

    const [open, setOpen] = useState(false)

    return (
        <div className="Nav_whole">
            <div className="hamberger" onClick={() => setOpen(!open)}>🍔</div>
        </div>
    );
}


export default Nav;