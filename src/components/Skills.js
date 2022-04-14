import React from 'react';

export const Skills = () => {
    return(
        <div>
            <h2 className='skills-header'>Skills</h2>
            <div className='wrapper'>
                <div><img src={require('../img/html.png')} alt='HTML Logo'></img></div>
                <div><img src={require('../img/css.png')} alt='CSS Logo'></img></div>
                <div><img src={require('../img/Javascript_Logo.png')} alt='JavaScript Logo'></img></div>
                <div><img src={require('../img/react2.png')} alt='React Logo'></img></div>
                <div><img src={require('../img/node2.png')} alt='Node.js Logo'></img></div>
            </div>
        </div>
    )
}

export default Skills;