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
    </Col>
    <Col xs={1} md={1}></Col>
    <Col xs={10} md={10}>
      <p className="first-section-disclaimer-colonic">
By using this website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use <b>https://parkslopecolonics.com</b>. <br/>

<ol>
<li>Any application of the information provided on <b>https://parkslopecolonics.com</b>  is at the reader’s discretion and their sole responsibility. <br/>
</li>
<li>This information is not intended to be, nor should it be considered, medical advice. Information provided on this blog are for informational purposes only.  No information on this site should be used to diagnose, treat, prevent or cure any disease or condition. <b>https://parkslopecolonics.com</b>  is not a substitute for professional medical advice, diagnosis, or treatment.
</li>
<li>
All information and resources found on <b>https://parkslopecolonics.com</b> are based on the opinions of the author unless otherwise noted. <b>https://parkslopecolonics.com</b> does not warrant that the information contained in this website is complete, accurate, current or reliable.

</li>
<li>
The information on this website is not intended to replace a one-on-one relationship with a qualified health care professional. It is advised that you consult a medical professional before making any health changes. No information on this site should be relied upon to determine diet, make a medical diagnosis, or determine treatment for a medical condition. Never ignore professional medical advice in seeking treatment because of something you have read on this blog. If you think you may have a medical emergency, immediately all your doctor or dial 911. 

</li>
<li>
Any statements or claims about the possible health benefits conferred by any foods or supplements have not been evaluated by the Food & Drug Administration (FDA) and are not intended to diagnose, treat, prevent or cure any disease.

</li>
<li>
If any client chooses to hire Park Slope Colonics LLC for any procedure, they confirm that they did not rely on this website to make that decision. The client understands that to the maximum extent permitted by law, Park Slope Colonics LLC shall not be liable for any indirect, incidental, or negative health effects as a result of any treatment. Park Slope Colonics LLC shall not be liable for any negative medicine/drug interactions with the medication the client is currently taking. I hereby release Park Slope Colonics, LLC and its staff from any and all liability that may occur in connection with the Colon Hydrotherapy procedure.

</li>
</ol>

<b>LIMITATION OF LIABILITY.</b> EXCLUDING INDEMNIFICATION OBLIGATIONS OR DAMAGES ARISING FROM BREACH OF A PARTY’S CONFIDENTIALITY OBLIGATIONS, NEITHER PARTY SHALL BE LIABLE TO THE OTHER, REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT OR OTHERWISE, FOR ANY INDIRECT, INCIDENTAL, OR NEGATIVE HEALTH EFFECTS AS A RESULT OF GCH, EVEN IF SUCH PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, NOR SHALL COMPANY’S AGGREGATE LIABILITY FOR ANY OTHER DAMAGES ARISING OUT OF THIS AGREEMENT EXCEED THE REVENUE PAID BY CLIENT TO COMPANY IN ACCORDANCE WITH THE APPLICABLE SOW.
      </p>
    </Col>
  </Row>
  </Grid>
  </Layout>
)

export default Disclaimer
