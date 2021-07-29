import React, { useState } from "react";
import { Row, Col, Image, Form, Offcanvas, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../assets/circulate.png";
import { db } from "../firebase/config";
import "../index.css";
export default function LandingPage() {
  const [showContact, setShowContact] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleContactClose = () => setShowContact(false);
  const handleContactShow = () => setShowContact(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("subscribers")
      .add({
        fullName: fullName,
        email: email,
      })
      .then(() => {
        alert(
          "Thank you for joining the Circulate community! We look forward to updating you on the launch of our new web application"
        );
      })
      .catch((err) => {
        alert(err.message);
      });

    setFullName("");
    setEmail("");
  };

  return (
    <React.Fragment>
      <motion.div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#2C2C2C",
        }}
        className="p-3"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "15%",
          }}
        >
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="pt-3"
            >
              <motion.img
                fluid
                src={logo}
                alt="logo"
                height={100}
                width={100}
                style={{ width: "150px", height: "150px" }}
                animate={{
                  rotate: 360,
                  duration: 5,
                }}
              />
            </Col>
          </Row>
          <Row xs={1} md={1} lg={1}>
            <Col className="text-center text-white pt-4">
              <small
                style={{ fontFamily: "Roboto" }}
                className="text-uppercase"
              >
                Our website is{" "}
              </small>
              <h1 style={{ fontFamily: "Roboto" }} className="text-uppercase">
                under construction
              </h1>
              <small
                style={{
                  fontSize: "12px",
                  fontFamily: "sans-serif",
                  textTransform: "uppercase",
                }}
              >
                Join our mailing list for the official launch.
              </small>
            </Col>
          </Row>
          <Row>
            <Col className="text-center pt-3">
              <Button
                variant="outline-light"
                onClick={handleContactShow}
                style={{ fontFamily: "Roboto", fontWeight: "500" }}
              >
                NOTIFY ME
              </Button>
              <Offcanvas
                placement="end"
                show={showContact}
                onHide={handleContactClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    style={{ fontFamily: "Roboto", fontWeight: "500" }}
                  >
                    Circulate | San Antonio
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Row xs={1} md={1} lg={1}>
                    <Col className="pb-2">
                      <p>
                        Join our mailing list for official updates on the launch
                        of our new website.
                      </p>
                    </Col>
                    <Col>
                      <Form
                        style={{ fontFamily: "Roboto", fontWeight: "500" }}
                        onSubmit={handleSubmit}
                      >
                        <Form.Group className="pb-2">
                          <Form.Control
                            type="text"
                            placeholder="Full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type="email"
                            placeholder="firstlast@email.com"
                            className="pb-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <Form.Text className="text-muted">
                            <small
                              style={{
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              We promise not to spam, share, or sell your
                              contact information.
                            </small>
                          </Form.Text>
                        </Form.Group>
                        <div className="d-grid gap-2 pt-3">
                          <Button variant="dark" type="submit">
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <small
                      className="text-muted text-center pt-5 text-uppercase"
                      style={{ fontFamily: "Roboto", fontWeight: "bold" }}
                    >
                      All Right Reserved Circulate, LLC ©
                    </small>
                    <small
                      className="pt-5 text-muted text-center pt-5 text-uppercase"
                      style={{
                        fontSize: "9px",
                        fontFamily: "Roboto",
                        fontWeight: "300",
                      }}
                    >
                      Design and Development by{" "}
                      <a
                        href="https://j12designs.com"
                        target="__blank"
                        rel="noopener"
                        style={{
                          textDecoration: "none",
                          color: "#171717",
                        }}
                      >
                        J12 Designs{" "}
                      </a>
                    </small>
                  </Row>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
          </Row>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
