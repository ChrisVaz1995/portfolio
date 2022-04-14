import React from 'react';

export const Hero = () => {
    return(
        <div>
            <div className="hero-background">
                <img src={require('../img/chris.PNG')} alt="Chris's Picture" class='hero-picture'></img>
                <h1 className='hero-title'>Hero World! My Name is Chris Vazquez</h1>
                <h3 className='hero-title'>I am a Front-End Engineer / Software Engineer</h3>
                <div className="wrapper">
                <div>Github</div>
                <div>Linkedin</div>
                </div>
            </div>
        </div>
    )
}

export default Hero;