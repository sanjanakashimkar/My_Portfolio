import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
 // Ensure you create this CSS file for additional custom styling

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "An error occurred. Please try again." });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                          className="form-control"
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                          className="form-control"
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                          className="form-control"
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 mb-3">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                          className="form-control"
                        />
                      </Col>
                      <Col xs={12} className="px-1 mb-3">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                          className="form-control"
                        ></textarea>
                      </Col>
                      <Col xs={12} className="text-center">
                        <button type="submit" className="btn btn-primary">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col xs={12} className="mt-3">
                          <p className={status.success === false ? "text-danger" : "text-success"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
