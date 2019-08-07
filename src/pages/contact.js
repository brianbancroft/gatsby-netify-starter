import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { ContactForm } from '../components'

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Form Demonstration" />
    <h1>Contact Form Demo</h1>
    <p>
      Netlify comes with built-in Contact form functions. For small
      side-projects or other sites, contact forms can be a good fit!
    </p>

    <ContactForm />
  </Layout>
)

export default SecondPage
