import React from 'react';

const ValidationComponent = (props) => {
    let divStyle = { transition: 'background 0.3s ease-in', fontWeight: 'bold'};
    let textToReturn = '';
    if (props.textLength < 5) {
        textToReturn = 'Text too short';
        divStyle.background = 'lightcoral';
    } else {
        textToReturn = 'Text length OK';
        divStyle.background = 'limegreen';
    }
        
        
    return (
        <div className="panel-body" style={divStyle}>
            {textToReturn}
        </div>
    );
}

export default ValidationComponent;