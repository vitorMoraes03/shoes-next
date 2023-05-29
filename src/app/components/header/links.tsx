"use client"

import styled from 'styled-components'
import Link from 'next/link'
import PersonIcon from './icons/person-icon'
import CartIcon from './icons/cart-icon'

const TagDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    text-transform: uppercase;
    color: var(--main-white);
  }

  div {
    padding-right: var(--space-small);
    display: flex;
    gap: var(--space-small);
  }
`

function Links() {
  return (
    <TagDiv>
        <Link href="">Shop</Link>
        <div>
            <PersonIcon />
            <CartIcon />
        </div>
    </TagDiv>
  )
}

export default Links
