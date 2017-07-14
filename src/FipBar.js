import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GoCSignature } from '@cdssnc/gcui'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const HeaderBar = styled.div`
  background-color: #000;
  width: 100%;
  min-height: 2.6em;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledNavbar = styled(Navbar)`
	width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const Links = styled(Nav)`
  float: right;
`

const StyledNavLink = styled(NavLink)`
	color: #fff;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	&:after {
		content: "  |";
	}
	&:hover {
    color: #fff;
	}
`

const LeftSpan = styled.span`
  float: left;
  display: inline-table;
`
const RightSpan = styled.span`
  float: right;
  display: inline-table;
`

const FipBar = ({ links = [] }) =>
  <HeaderBar>
    <StyledNavbar style={{ display: 'block' }}>
      <LeftSpan>
        <NavbarBrand href="/">
          <GoCSignature text="#fff" flag="#fff" />
        </NavbarBrand>
      </LeftSpan>
      <RightSpan>
        <Links>
          {links.map((link, index) =>
            <NavItem key={index}>
              <StyledNavLink href={link.url}>
                {link.text}
              </StyledNavLink>
            </NavItem>
          )}
        </Links>
      </RightSpan>
    </StyledNavbar>
  </HeaderBar>

FipBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}
export default FipBar
