import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/blog.css'
import { Grid } from 'react-bootstrap'

const Blog = () => (
  <Layout>
    <SEO title="blog" />
    <Grid>
      <div className="main-div blog">
        <p className="coming-soon">coming soon...</p>
      </div>
    </Grid>
  </Layout>
)

export default Blog
