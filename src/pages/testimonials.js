import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/testimonials.css'
import { Grid } from 'react-bootstrap'

const Testimonials = () => (
  <Layout>
    <SEO title="testimonials" />
    <Grid align="center">
      <div class="customers-main">
        <Grid>
          <div className="top-review">
            <p>
              -This is amazing. Feel so much better. Lena is the best therapist
              in the world!-
            </p>
            <h1 className="testimon">-Maria A-</h1>
          </div>
        </Grid>
      </div>
      <div class="customers-main">
        <Grid>
          <div className="custom-info">
            <p>
              This is amazing. Feel so much better. Lena is the best therapist
              in the world!
            </p>
            <h1 className="testimon">-Park S-</h1>
          </div>
        </Grid>
      </div>
      <div class="customers-main">
        <Grid>
          <div className="custom-info">
            <p>
              This is amazing. Feel so much better. Lena is the best therapist
              in the world!
            </p>
            <h1 className="testimon">-Park S-</h1>
          </div>
        </Grid>
      </div>
      <div class="customers-main">
        <Grid>
          <div className="custom-info">
            <p>
              This is amazing. Feel so much better. Lena is the best therapist
              in the world!
            </p>
            <h1 className="testimon">-Park S-</h1>
          </div>
        </Grid>
      </div>
      <div class="customers-main">
        <Grid>
          <div className="custom-info">
            <p>
              This is amazing. Feel so much better. Lena is the best therapist
              in the world!
            </p>
            <h1 className="testimon">-Park S-</h1>
          </div>
        </Grid>
      </div>
    </Grid>
  </Layout>
)

export default Testimonials
