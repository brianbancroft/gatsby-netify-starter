import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const AppFooter = styled('footer')`
  border-top: 3px solid ${props => props.theme.color.primary};
  background: ${props => props.theme.color.white};
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100vw;
`

const FooterLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.primary};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 25px;
  border-right: 1px solid ${props => props.theme.color.primary};
  border-left: 1px solid ${props => props.theme.color.primary};
`

const Footer = () => {
  return (
    <AppFooter>
      <FooterLink to="/">Random Number</FooterLink>
      <FooterLink to="/contact">Form</FooterLink>
    </AppFooter>
  )
}

export default Footer
