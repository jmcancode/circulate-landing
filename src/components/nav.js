import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

export default function FooterNav() {
  return (
    <>
      <Navbar style={{height: '40vh'}}>
        <Container>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="nav"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              style={{
                display: "inherit",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
            </div>
          </motion.div>
          <motion.div
            className="nav ml-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Nav.Item className="p-2">
                <a
                  href="https://www.facebook.com/circulateappsa/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook color="#171717" size={25} />
                </a>
              </Nav.Item>
              <Nav.Item className="p-2">
                <a
                  href="https://www.instagram.com/circulateappsa/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram color="#171717" size={25} />
                </a>
              </Nav.Item>
              <Nav.Item className="p-2">
                <a href="mailto:circulatetheapp@gmail.com?subject=Circulate Inquiry">
                  <AiOutlineMail color="#171717" size={25} />
                </a>
              </Nav.Item>
            </div>
          </motion.div>
        </Container>
      </Navbar>
    </>
  );
}
