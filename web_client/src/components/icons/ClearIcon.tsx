import React from 'react';
import {IconPropsInterface} from "./IconPropsInterface";

const FilterIcon: React.FC<IconPropsInterface> = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 6.64C1.4 7.16 23.96 35.96 23.96 35.96V60C23.96 62.2 25.76 64 28 64H36.04C38.24 64 40.08 62.2 40.08 60V35.92C40.08 35.92 62.04 7.84 63.08 6.56C64.12 5.28 64 4 64 4C64 1.8 62.2 0 59.96 0H4.04C1.6 0 0 1.92 0 4C0 4.8 0.24 5.76 1 6.64Z"
                fill={color}/>
        </svg>
    )
};

export default FilterIcon;
