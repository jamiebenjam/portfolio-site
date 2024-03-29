import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ecom2 from '../images/ecom2.png';
import ecom3 from '../images/ecom3.png';
import ranch from '../images/ranch.png';
import ranch2 from '../images/ranch2.png';
import ranch3 from '../images/ranch3.png';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { DiGithubBadge } from 'react-icons/di';
import PortfolioParallax1 from './PortfolioParallax1';
import NavBar from './NavBar';

const Porfolio = () => {
  return (
    <div>
      <NavBar />
      {/* <Parallax pages={6}> */}
      <div className="slow" />
      <PortfolioParallax1 />
      {/* <ParallaxLayer offset={1} speed={0.5}> */}
      <Container>
        <Row>
          <Col sm={4}>
            <div className="ecomDescriptionDiv">
              <div className="githubLink">
                <a
                  href="https://github.com/jamiebenjam/ecommerce-capstone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiGithubBadge className="github" /> GitHub
                </a>
                <h1 className="projectTitle">Ecommerce Site</h1>
                <ul>
                  <li className="listTitle">React frontend & Ruby backend</li>
                  <li className="projectTextItem">User-friendly navigation</li>
                  <li className="projectTextItem">Site search</li>
                  <li className="projectTextItem">Local cart storage</li>
                  <li className="projectTextItem">
                    Admin and user functionality
                  </li>
                  <li className="projectTextItem">Shop by category</li>
                  <li className="projectTextItem">Sort by price</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="ecomText">
              {/* KEEP background image div KEEP */}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <img src={ecom2} alt="Ecommerce" className="ecom2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={ecom3} alt="Ecommerce" />
          </Col>
        </Row>
      </Container>
      {/* </ParallaxLayer> */}

      {/* <ParallaxLayer offset={3.5} speed={0.5}> */}
      <Container>
        <Row>
          <Col sm={4}>
            <div className="ecomDescriptionDiv">
              <div className="githubLink">
                <a
                  href="https://github.com/jamiebenjam/react-final-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiGithubBadge className="github" /> GitHub
                </a>
                <h1 className="projectTitle">Logic Based Game</h1>
                <ul>
                  <li className="listTitle">ReactJS</li>
                  <li className="projectTextItem">JSON-server API</li>
                  <li className="projectTextItem">peed settings</li>
                  <li className="projectTextItem">
                    Individual compounding ROI and growth periods per animal
                  </li>
                  <li className="projectTextItem">
                    Items sent to barn or garden on click based on item category
                  </li>
                  {/* <li className="projectTextItem">Shop by category</li>
                      <li className="projectTextItem">Sort by price</li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="farmText">
              {/* KEEP background image div KEEP */}
            </div>
          </Col>
        </Row>
      </Container>
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer offset={4} speed={1}> */}
      <div className="slow" />
      <Container>
        <Row>
          <Col>
            <img src={ranch} alt="Ecommerce" className="ecom2" />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <img src={ranch2} alt="Ecommerce" className="ranchSmall" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={ranch3} alt="Ecommerce" className="ranchLarge" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="findMore">
              Find more on my{' '}
              <a
                href="https://github.com/jamiebenjam"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/in/jamie-benjamin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn!
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
    </div>
  );
};

export default Porfolio;
