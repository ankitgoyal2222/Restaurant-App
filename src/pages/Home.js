import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from "../images/banner.jpeg";
// import Banner from "../images/food1.avif";
// import Banner from "../images/food1.png";

import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food <a >Website</a></h1>
          <p>Best Fo<a >od in India</a></p>
          <Link to="/menu">
            <button>ORDER <a >NOW</a></button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
