import React from 'react';
import './Char.css';

const CharComponent = (props) => {
    console.log(props.char);
    const componentStyle = { fontWeight: 'bold', display: 'inline-block', padding: '0.2em', width: '2em', textAlign: 'center', margin: '0.2em', border: '2px solid #404040', borderRadius: '0.2em' 
    }
    const empty = { width: '2em', padding: '0.2em', margin: '0.2em' }
    return <span 
                className="intro" 
                style={props.char !== " " ? componentStyle : empty}
                onClick={props.removeChar}>{props.char}</span>
}

export default CharComponent;