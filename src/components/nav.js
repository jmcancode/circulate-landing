import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { AiFillApple, AiFillAndroid, AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export default function FooterNav() {
  return (
    <>
      <Navbar
        fixed="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="light"
      >
        <Nav>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <a
                href="https://apps.apple.com/us/app/circulate-llc/id1570958132"
                target="__blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <AiFillApple color="#f5f5f5" size={40} />
              </a>
            </div>
            <div className="p-2">
              <AiFillAndroid color="#f5f5f5" size={40} />
            </div>
          </div>
        </Nav>
        <Nav className="ml-auto">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="p-2">
              <a
                href="https://www.facebook.com/circulateappsa/"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FiFacebook color="#f5f5f5" size={35} />
              </a>
            </div>
            <div className="p-2">
              <a
                href="https://www.instagram.com/circulateappsa/"
                target="__blank"
                rel="noopener noreferrer"
              >
                <FiInstagram color="#f5f5f5" size={35} />
              </a>
            </div>
            <div className="p-2">
              <a href="mailto:circulatetheapp@gmail.com?subject=Circulate Inquiry">
                <AiOutlineMail color="#f5f5f5" size={35} />
              </a>
            </div>
          </div>
        </Nav>
      </Navbar>
    </>
  );
}
