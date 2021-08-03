import React from 'react'
import './Style/Footer.css'

const Footer = () => {

  return (
    <footer className="FooterContainer">
      <div className="FooterWrap">
        <div className="FooterLinksContainer">
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Get in touch</h1>
              <div className="FooterLink">
                thehealthynutcase@gmail.com
              </div>
              <div className="FooterLink">
                +91-9930456789
              </div>
              <div className="FooterLink">
                3rd Floor, Office Number 40, D-Wing, Mandola Industrial Complex, Military Rd,
                Delhi - 110024, India
              </div>
            </div>
          </div>
          <div className="FooterLinksWrapper">
            <div className="FooterLinkItems">
              <h1 className="FooterLinkTitle">Socials</h1>
              <a
                className="FooterLink"
                href="https://www.instagram.com/ritikramuka.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                className="FooterLink"
                href="https://www.linkedin.com/in/ritik-ramuka-018b6318b/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                Linkedin
              </a>
              <a
                className="FooterLink"
                href="https://github.com/ritikramuka"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="SocialMedia">
          <div className="SocialMediaWrap">
            <small className="WebsiteRights">
              <a
                className="RikRak"
                href="https://www.linkedin.com/in/ritik-ramuka-018b6318b/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ritik Ramuka"
              >
                Made by Ritik Ramuka & Soumya Soni
              </a>
            </small>
            <div className="SocialIcons">
              <a
                className="SocialIconLink"
                href="https://www.linkedin.com/in/ritik-ramuka-018b6318b/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
              </a>
              <a
                className="SocialIconLink"
                href="https://github.com/ritikramuka"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
              </a>
              <a
                className="SocialIconLink"
                href="https://www.instagram.com/ritikramuka.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
