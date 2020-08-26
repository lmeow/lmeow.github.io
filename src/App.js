import "./App.css";
import React from "react";
import Fade from 'react-reveal/Fade';



export default function App() {
  return (
    <div className="container">
      <Fade>
      <div className="header-name">Maja<br/>Frankiewicz
</div>
<div  className="social-media">
<ul>
						<a
							href="https://www.linkedin.com/in/maja-frankiewicz/"
							className="nav__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
            <a href="https://github.com/lmeow"
							className="nav__link"
							target="_blank"
							rel="noopener noreferrer"><i class="fab fa-github"></i></a>
				</ul>
        </div>
<div className="plants-svg"></div>
</Fade>
    </div>
  );
}
