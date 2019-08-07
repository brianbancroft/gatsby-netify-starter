import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import NumberGenerator from '../components/NumberGenerator'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Random Number Generator</h2>
    <NumberGenerator />
  </Layout>
)

export default IndexPage
