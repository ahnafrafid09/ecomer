import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <h4 className="text-white">Dreamtime Furniture</h4>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              sequi commodi impedit dignissimos omnis ab voluptatem
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy & Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Single Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Table</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer_quick-links icon">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Bandung, West Java, Indonesia</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+628123456789</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex algin-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>example.example@widyatama.ac.id</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer_copyright">Copyright {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
