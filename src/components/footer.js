import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
     <a href="https://gear8.in/">Gear8 </a> &copy; 2021-2022
    </div>
  </Container>
)

export default Footer
