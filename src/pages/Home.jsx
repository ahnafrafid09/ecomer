import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Product from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import Services from "../services/Services";
import ProductList from "../components/Ui/ProductList";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterTrendingProduct = Product.filter(
      (item) => item.category === "Arm Chair"
    );

    const filterBestSalesProduct = Product.filter(
      (item) => item.category === "Single Sofa"
    );

    const filterNewProducts = Product.filter(
      (item) => item.category === "Sofa"
    );

    setTrendingProducts(filterTrendingProduct);
    setBestSalesProducts(filterBestSalesProduct);
    setNewProducts(filterNewProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product In {year}</p>
                <h2>Make Your Interior More Minimalist And Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur voluptatibus esse illo illum nemo, quas accusamus
                  alias corporis minus eligendi iste error? Magnam laudantium
                  asperiores eaque dicta temporibus, reiciendis alias?
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={HeroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="new_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-3">
              <h2 className="section_title">New Products</h2>
            </Col>
            <ProductList data={newProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
