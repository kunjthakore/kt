import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
        <span className="profile-role-tagline">
                Connect Me On
              </span>
          <div className="colz">

            <div className="colz-icon">
              <a href="https://www.facebook.com/kunjkumarthakor">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>

              <a href="https://www.instagram.com/kunjthakor/?hl=en">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a href="https://in.linkedin.com/in/kunj-thakor">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>

              <a href="https://twitter.com/nightmakers43">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/+917874804043?text=Hello Kunj">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/kunjthakore">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://www.snapchat.com/add/kunj_thakor7874?share_id=RTk4NUM3&locale=en_IN">
                <i className="fa fa-snapchat" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}Hello,I'M <span className="highlighted-text">Kunj Thakor</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>{" "}
                <Typewriter
                  options={{
                    strings: [
                      "Engineer @ eInfochips",
                      "React Web Developer",
                      "",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Failure Teaches Me and Other people's success inspires me.
              </span>
            </span>
          </div>
          <div className="profile-options">
            {/* <button  className="btn primary-btn">{""}Hire Me {""}</button> */}
            <a href="kunj.pdf" download="kunj.pdf">
              <button className="btn btn btn-primary">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
