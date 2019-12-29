import React from 'react'

import Blogcard from '../components/blogcard'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/blog.css'
import { Grid } from 'react-bootstrap'

const Blog = () => (
  <Layout>
    <SEO title="blog" />
    <Grid>
        <Blogcard/>
    </Grid>
  </Layout>
)

export default Blog
