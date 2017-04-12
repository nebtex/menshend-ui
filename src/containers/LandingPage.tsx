import * as React from 'react';
import { Container, Navbar, NavbarBrand, Row, Col } from 'reactstrap';
import { Link, Element, Events, scrollSpy, animateScroll, Button } from 'react-scroll';
import * as ReactMarkdown from 'react-markdown';
let styles = require('./LandingPage.scss');

export class LandingPage extends React.Component<{},{}>{
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to:any, element:any) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to:any, element:any) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

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

  getScrollspySection = () => {
    return (
      <Container className={styles.section} data-spy="scroll" data-target="#navbar-example">
        <Row className={styles.sectionHeader}>
          <h3>Scrollspy Section</h3>
        </Row>
        <Row>
          <Col md="3">
            <div className={styles.scrollSpyLinks}>
              <ul className="nav nav-pills" style={{flexDirection:'column'}}>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="test1" spy={true} smooth={true} duration={500}>
                    Test 1 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="test2" spy={true} smooth={true} duration={500}>
                    Test 2 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="test3" spy={true} smooth={true} duration={500}>
                    Test 3 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="test4" spy={true} smooth={true} duration={500}>
                    Test 4 
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="9">
            <div>
              <Element name="test1" className={styles.scrollSpyElement}>
                <h5>Test 1</h5>
                test 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non.
              </Element>
              <Element name="test2" className={styles.scrollSpyElement}>
                <h5>Test 2</h5>
                test 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. 
              </Element>
              <Element name="test3" className={styles.scrollSpyElement}>
                <h5>Test 3</h5>
                test 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. 
              </Element>
              <Element name="test4" className={styles.scrollSpyElement}>
                <h5>Test 4</h5>
                test 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim. Cras blandit leo et magna aliquam feugiat. Vivamus efficitur purus vel eros facilisis tincidunt. Nunc gravida enim eget porta gravida. Nam gravida eros ac maximus vehicula. Mauris ullamcorper purus eu ante volutpat, at bibendum eros vulputate. Duis pretium rhoncus nunc. Suspendisse est libero, ullamcorper sed blandit pellentesque, bibendum vitae massa. Sed viverra nec tellus eget facilisis. Suspendisse feugiat tortor nec nisl fringilla, a tempor lectus placerat. Nulla tincidunt, libero eget dapibus hendrerit, augue metus elementum augue, sed varius purus leo a tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet massa lacus, quis auctor ex fringilla non. Praesent ut varius est, sed feugiat nisi. Maecenas arcu dui, varius in suscipit pulvinar, euismod nec enim.
              </Element>
            </div>
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
    const ScrollspySection = this.getScrollspySection();
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
          {ScrollspySection}
          {gettingStartedSection}
          {footer}
        </div>
      </div>
    )
  }
}