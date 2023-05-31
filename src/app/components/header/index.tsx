"use client"

import Links from './links'
import Logo from './logo'
import styled from 'styled-components'

const TagHeader = styled.header`
  display: flex;
  background-color: var(--main-color);
  color: var(--main-white);
  position: fixed;
  top: 0;
  z-index: 100;
  height: var(--margin-top);
  width: 100%;

  svg,
  h1,
  a {
    cursor: pointer;
  }

  svg:hover,
  h1:hover,
  a:hover {
    color: var(--main-shade);
  }
`

function Header() {
  return (
    <TagHeader>
      <Logo />
      <Links />
    </TagHeader>
  )
}

export default Header
