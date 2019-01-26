import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/faq.css'
import { Grid } from 'react-bootstrap'

const Faq = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <div className="main-div faq">
        <p className="coming">coming soon...</p>
      </div>
    </Grid>
  </Layout>
)

export default Faq
