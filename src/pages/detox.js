import React from 'react'

import Supplement from '../components/supplement'

import Layout from '../components/layout'
import SEO from '../components/seo'

// import '../styles/supplement.css'
import { Grid } from 'react-bootstrap'

const Detox = () => (
  <Layout>
    <SEO title="detox" />
    <Grid>
      <Supplement />
    </Grid>
  </Layout>
)

export default Detox
