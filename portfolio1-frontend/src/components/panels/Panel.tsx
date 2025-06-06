import React from 'react';

import type { panelProps } from '../propTypes.ts'

const Panel = (props: panelProps) => {
    const {
        className = "",
        children,
        visible = true
    } = props


    return(
       <div className={className} 
        style={{
            display: visible ? "flex" : "none" 
        }}
       >
            {children}
       </div> 
    );
}

export default Panel; 
