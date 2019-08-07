import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const AppHeader = styled('header')`
  background: ${props => props.theme.color.primary};
  margin-bottom: 1.45rem;

  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }

  h1 {
    margin: 0;
  }

  a {
    color: ${props => props.theme.color.white};
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <AppHeader>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </AppHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
