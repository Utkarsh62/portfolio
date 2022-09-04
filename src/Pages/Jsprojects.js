import React from "react";
import onelife from "../Data/Portfolioimg/1life.png";
import alembicaustralia from "../Data/Portfolioimg/alembicaustralia.png";
import avidorganics from "../Data/Portfolioimg/avidorganics.png";
import baggsinc from "../Data/Portfolioimg/baggsinc.png";
import designmaxinteriors from "../Data/Portfolioimg/designmaxinteriors.png";
import drdharabhatt from "../Data/Portfolioimg/drdharabhatt.png";

import "./Projects.css";

const Projects = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Projects</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                 
                <a
                  href="https://to-do-list-321.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                   <img src={onelife} className="img-fluid" alt="1Life" />
                </a>
               
                  
                </div>
              
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                <a
                  href="https://tip-calculator-6.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={alembicaustralia}
                    className="img-fluid"
                    alt="Alembic"
                  />
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                <a
                  href="https://super-hero-info.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={avidorganics}
                    className="img-fluid"
                    alt="AvidOrganics"
                  />
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                <a
                  href="https://weather-app-6.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={baggsinc} className="img-fluid" alt="BaggsInc" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                <a
                  href="https://rock-paper-scissors-62.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={designmaxinteriors}
                    className="img-fluid"
                    alt="DesignMaxInteriors"
                  />
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                <a
                  href="https://stop-watch-62.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={drdharabhatt}
                    className="img-fluid"
                    alt="DrDharaBhatt"
                  />
                  </a>
                </div>
              </div>
             
            
             
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Projects;
