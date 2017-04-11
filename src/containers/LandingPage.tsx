import * as React from 'react';
import { Container, Navbar, NavbarBrand, Row, Col } from 'reactstrap';
import * as ReactMarkdown from 'react-markdown';
let styles = require('./LandingPage.scss');

export class LandingPage extends React.Component<{},{}>{
  getMainDescriptionSection = () => {
    return (
      <Container className={styles.section}>
        <Row>
          <Col xs="12" md="5">
            <h1>Menshend</h1>
            <p className={styles.descriptionInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.</p>
          </Col>
          <Col xs="12" md="7" className={styles.descriptionImageContainer}>
            <img src="https://placehold.it/512x512" className={styles.descriptionImage}/>
          </Col>
        </Row>
      </Container>
    );
  }

  getFeaturesSection = () => {
    return (
      <Container className={styles.section}>
        <Row className={styles.sectionHeader}>
          <h3>Features</h3>
        </Row>
        <Row>
          <Col md="4" xs="12" className={styles.feature}>
            <div className={styles.featureHeader}>
              <h5>One of the features of menshend</h5>
            </div>
            <p className={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.
            </p>
          </Col>
          <Col md="4" xs="12" className={styles.feature}>
            <div className={styles.featureHeader}>
              <h5>One of the features of menshend</h5>
            </div>
            <p className={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.
            </p>
          </Col>
          <Col md="4" xs="12" className={styles.feature}>
            <div className={styles.featureHeader}>
              <h5>One of the features of menshend</h5>
            </div>
            <p className={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.
            </p>
          </Col>
          <Col md="4" xs="12" className={styles.feature}>
            <div className={styles.featureHeader}>
              <h5>One of the features of menshend</h5>
            </div>
            <p className={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.
            </p>
          </Col>
          <Col md="4" xs="12" className={styles.feature}>
            <div className={styles.featureHeader}>
              <h5>One of the features of menshend</h5>
            </div>
            <p className={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.
            </p>
          </Col>
          <Col md="4" xs="12" className={styles.feature}>
            <div className={styles.featureHeader}>
              <h5>One of the features of menshend</h5>
            </div>
            <p className={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

  getGettingStartedSection = () => {
    return (
      <Container className={styles.section}>
        <Row className={styles.sectionHeader}>
          <h3>Getting Started</h3>
        </Row>
        <Row>
          <Col md="12">
            <ReactMarkdown source={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.'}/>
          </Col>
        </Row>
      </Container>
    );
  }

  getFooter = () => {
    return (
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col md="12">
              <p className={styles.footerMessage}>© 2017 — Some menshend slogan. </p>
              <div className={styles.footerLinks}>
                <a href="#">FAQs</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
                <a href="#">Donate</a>
                <a href="#">team@menshend.me</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }

  render(){
    const mainDescriptionSection = this.getMainDescriptionSection();
    const featuresSection = this.getFeaturesSection();
    const gettingStartedSection = this.getGettingStartedSection();
    const footer = this.getFooter();
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <Container>
            <NavbarBrand href="/">Menshend</NavbarBrand>
          </Container>
        </Navbar>
        <div>
          {mainDescriptionSection}
          {featuresSection}
          {gettingStartedSection}
          {footer}
        </div>
      </div>
    )
  }
}