import React from 'react';

const Sidebar = ({ show }) => {

    return (    
        <div style={{
            right : show ? 0 : '-100vw',
            transition : 'right 0.5s' 

        }}>
        </div>
    )
}

export default Sidebar;