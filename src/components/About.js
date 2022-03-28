import React from 'react'
import Biking from '../assets/biking.jpg'

const About = (props) => {
    //const { setContactSelected } = props;

    return (
        <section className='about-container'>
    <style>
        ul.no-bullets
      </style>
            <div>
                <p>Hello, my name is Alfonso Fernandez, I am a junior software developer just 6 months into my journey of becoming a software engineer and web developer</p>
                <p>California born, Texas raised!</p>
                <p>My other hobbies include the gym, traveling, discovering new music, and collecting sneakers👟🏋️🎵✈️</p>
                <p>So far my tech stack includes:</p>
                <ul className='stack-list'>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL, noSQL</li>
                    <li>React</li>
                </ul>
                <p>Education</p>
                <ul className='stack-list'>
                    <li>University of Texas at San Antonio: Pursuing Bachelors Degree in Public Health</li>                   
                </ul>
                {/* <button className='about-button' onClick={() => setContactSelected(true)}>send me an email</button> */}
            </div>
            <div>
            <img src={Biking} className="biking" alt="me on a beach crusier" />
            </div>
        </section>
    )
}

export default About