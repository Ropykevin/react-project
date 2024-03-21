import React from "react";

type PropType = {
    ourState: number;
    handleClick: () => void; 
}

const HomeUpdate: React.FC<PropType> = ({ ourState, handleClick }) => {
    return (
        <>
            <div>our state {ourState}</div>
            <button onClick={handleClick}>Click me</button>
        </>
    );
}

export default HomeUpdate;
