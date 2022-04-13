import React from 'react';
// import MyButton from ./components

const MyButton =(props) => {
    return(
        <button style ={{ backgroundColor: props.backgroundColor, color: props.color }}>
            {props.buttonName}
        </button>
    )
}

export default MyButton