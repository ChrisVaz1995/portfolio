import React from 'react';

export const Project = () => {
    return(
        <div>
            <h2 className='project-header'>Projects</h2>
            <div className='container'>
                <div className='box'>
                    <h3 className='project-names'>Drumkit Project</h3>
                    <img src={require('../img/drum.PNG')} alt='Drum Site' className='project-picture'></img>
                    <p>Created a fun interactive project that allows users to interact with the keys on the keyboard to make musical drum sounds or clicking on the buttons displayed on the web page. 
                       Gave it design look using CSS and HTML to give a presentable experience and added JavaScript for functionality.
                    </p>
                </div>

                <div className='box'>
                    <h3 className='project-names'>Hotel site Project</h3>
                    <img src={require('../img/hotel.PNG')} alt='Hotel Site' className='project-picture'></img>
                    <p>Designed the front end with HTML and CSS. 
                        Then added interactivity with JavaScript and improved the performance with a React library. 
                        For the back end portion, I used Axios to make a GET request using Node.js and saving the information of the purchase with a SQL database  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project;