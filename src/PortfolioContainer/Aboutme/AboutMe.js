import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import './AboutMe.css';

const AboutMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    } 
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = { 
        description: "React web and developer with background knowledge of HTML, CSS, and Javascript along with a knack for building applications with utmost efficiency. Strong professional with eInfochips to be an asset for an organization.",
        highlights: {
            heading: "Here are a Few Highlights:",
            bullets: [
                "Django web development",
                "Interactive Front End as per the design",
                "MongoDB",
                "HTML & CSS",         
                "Backend Development",
                "RestFul API",
           ],
           
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        }
    }, [fadeInSubscription]);

    return (
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                    <div className="about-me-options">
                         <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                            <button className="btn btn-primary"> Get Resume </button>
                         </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
