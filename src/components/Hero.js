import React from 'react';

export const Hero = () => {
    return(
        <div>
            <div className="hero-background">
                <img src={require('../img/chris.PNG')} alt="Chris's Picture" class='hero-picture'></img>
                <h1 className='hero-title'>Hero World! My Name is Chris Vazquez</h1>
                <h3 className='hero-title'>I am a Front-End Engineer / Software Engineer</h3>
                <div className="wrapper">
                <div><a href="https://github.com/ChrisVaz1995" target="_blank"><img src={require('../img/github.jpg')}></img> </a></div>
                <div><a href="https://www.linkedin.com/in/chrisvazquez95/" target="_blank"><img src={require('../img/linkedin.png')}></img></a></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;