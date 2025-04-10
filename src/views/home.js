import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Round Curvy Pig</title>
        <meta property="og:title" content="Round Curvy Pig" />
      </Helmet>
      <span>Github Integration</span>
    </div>
  )
}

export default Home
