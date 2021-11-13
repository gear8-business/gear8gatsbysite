import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container} style={{"widht":"100%"}}>
      <a href="https://gear8.in" className="text-center">www.gear8.in</a> {' '} &copy; {' '} 2021 
    </div>
  </Container>
)

export default Footer
