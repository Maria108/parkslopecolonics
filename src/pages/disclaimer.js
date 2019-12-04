import React from 'react'
import Layout from '../components/layout'
import '../styles/disclaimer.css'
import { Grid, Row, Col } from 'react-bootstrap'

const Disclaimer = () => (
  <Layout>
  <Grid>
  <Row className="first-section-disclaimer">
    <Col xs={12} md={12}>
      <p className="first-section-disclaimer-header">DISCLAIMER</p>
      <p className="first-section-disclaimer-colonic">
      Colon hydrotherapy is not intended to treat, cure or prevent any disease. Colon hydrotherapy services are not supervised or performed by a physician. Colon hydrotherapy services are performed by a technician certified by Woods Hygienic Institute. Technicians are not required to be licensed and are not regulated by the State of New York or other state or federal governmental agency. Park Slope Colonics will not perform colon hydrotherapy services if certain medical conditions or symptoms are present. This web site is not intended to provide medical advice or to be a substitute for a visit to your doctor. Use of this web site does not create a doctor-patient relationship.<br />

      Information on this site is provided for informational purposes only and is not meant to substitute for the advice provided by your physician or other medical professional.
       The results reported may not necessarily occur in all individuals. Park Slope Colonics is providing this site and its contents on an “as is” basis and makes no representations or warranties of any kind with respect to this site or its contents. Except as specifically stated on this site, neither Park Slope Colonics nor any of its employees or other representatives will be liable for damages arising out of or in connection with the use of this site. This is a comprehensive limitation of liability that applies to all damages of any kind, including (without limitation) compensatory, direct, indirect or consequential damages, loss of data, income or profit, loss of or damage to property and claims of third parties.<br />
      
      These statements have not been evaluated by the Food and Drug Administration. The products and services offered are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </Col>
  </Row>
  </Grid>
  </Layout>
)

export default Disclaimer
