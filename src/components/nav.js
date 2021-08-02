import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiFillApple, AiFillAndroid, AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

export default function FooterNav() {
  return (
    <>
      <Navbar fixed="bottom">
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
              <Nav.Item>
                <a
                  href="https://apps.apple.com/us/app/circulate-llc/id1570958132"
                  target="__blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <AiFillApple color="#f5f5f5" size={40} />
                </a>
              </Nav.Item>
              <Nav.Item className="p-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.devex.circulateapp"
                  target="__blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <AiFillAndroid color="#f5f5f5" size={40} />{" "}
                </a>
              </Nav.Item>
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Nav.Item className="p-2">
                <a
                  href="https://www.facebook.com/circulateappsa/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook color="#f5f5f5" size={35} />
                </a>
              </Nav.Item>
              <Nav.Item className="p-2">
                <a
                  href="https://www.instagram.com/circulateappsa/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram color="#f5f5f5" size={35} />
                </a>
              </Nav.Item>
              <Nav.Item className="p-2">
                <a href="mailto:circulatetheapp@gmail.com?subject=Circulate Inquiry">
                  <AiOutlineMail color="#f5f5f5" size={35} />
                </a>
              </Nav.Item>
            </div>
          </motion.div>
        </Container>
      </Navbar>
    </>
  );
}
