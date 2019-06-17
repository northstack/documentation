import React from "react"
import { Link } from "gatsby"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

import MainMenu from "../components/main-menu";
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
  <Row className="no-gutters">
      <Col xs={3} xl={true} style={{backgroundColor: "rgba(0,0,0,.03)"}}>
          <Container className="sticky-top article-left">
              <MainMenu />
          </Container>
      </Col>
      <Col xs={9} className="col-main-content">
        <article>
          <h1>NorthStack Documentation</h1>
          <p>Welcome to the NorthStack documentation! Take a look around and learn how to use the most powerful platform for deploying serverless apps.</p>
          <Container className="home-cards">
            <CardDeck>
              <Card>
                <Link to="/getting-started/">
                  <Card.Body>
                    <Card.Title>Getting Started</Card.Title>
                    <Card.Text>Just getting started? Follow our guide to get up and running with NorthStack in minutes!</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              <Card>
                <Link to="/account/">
                  <Card.Body>
                    <Card.Title>Account</Card.Title>
                    <Card.Text>Learn how to make changes to your NorthStack account.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              
              
                <Card>
                  <Link to="/cli/">
                    <Card.Body>
                      <Card.Title>NorthStack CLI</Card.Title>
                      <Card.Text>Utilize the NorthStack CLI for quick and easy app creation, development, and deployments.</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              
              
                <Card>
                  <Link to="/integrations/">
                    <Card.Body>
                      <Card.Title>Integrations</Card.Title>
                      <Card.Text>Integrate NorthStack with your favorite services like GitHub.</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              
              
                <Card>
                  <Link to="/frameworks/">
                    <Card.Body>
                      <Card.Title>Frameworks</Card.Title>
                      <Card.Text>Browse the officially supported frameworks to build your app faster than ever with minimal maintenance.</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              
              
                <Card>
                  <Link to="/faqs/">
                    <Card.Body>
                      <Card.Title>FAQs</Card.Title>
                      <Card.Text>Just looking for a bit more information? Take a look at our frequently asked questions to better understand the NorthStack serverless platforms.</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
            </CardDeck>
          </Container>
          <h2>Officially Supported Frameworks</h2>
          <Container className="home-cards">
            <CardDeck>
              
                <Card>
                <Link to="/frameworks/wordpress/">
                  <Card.Body>
                    <Card.Title>WordPress</Card.Title>
                    <Card.Text>Leverage the world's largest content management system in our serverless WordPress hosting platform.</Card.Text>
                  </Card.Body>
                  </Link>
                </Card>
              
              
                <Card>
                <Link to="/frameworks/gatsby/">
                  <Card.Body>
                    <Card.Title>Gatsby</Card.Title>
                    <Card.Text>Generate incredibly fast static sites with React.</Card.Text>
                  </Card.Body>
                  </Link>
                </Card>
              
              
                <Card>
                <Link to="/frameworks/jekyll/">
                  <Card.Body>
                    <Card.Title>Jekyll</Card.Title>
                    <Card.Text>Create static sites with minimal code required.</Card.Text>
                  </Card.Body>
                  </Link>
                </Card>
              
            </CardDeck>
          </Container>
          <h2>Quick Start Guide</h2>
          <Container className="tutorial-steps home-quickstart">
            <ol>
              <li>
                <p>Install the NorthStack CLI:</p>
                <p><code>git clone https://github.com/northstack/northstack-client.git && cd northstack-client && ./bin/install.sh</code></p>
              </li>
              <li>
                <p>Create a new app:</p>
                <p><code>northstack app:create "MyAppName" "myappname.com" wordpress</code></p>
              </li>
              <li>
                <p>Deploy your app to NorthStack:</p>
                <p><code>northstack app:deploy "My Deploy Message" MyAppName dev</code></p>
              </li>
            </ol>
          </Container>
        </article>
      </Col>
  </Row>
</Layout>
)

export default IndexPage
