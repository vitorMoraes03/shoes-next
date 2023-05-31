'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { StyledBtnGray } from '../btnStyle'
import { Ruthie } from 'next/font/google'

const ruthie = Ruthie({
  weight: ['400'],
  subsets: ['latin-ext'],
})

const TagDiv = styled.div`
  grid-area: picture3;
  height: 300px;
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    width: 100%;
    text-align: center;
  }

  h3 {
    color: var(--main-white);
    transition: all 0.15s ease;
    text-transform: none;
    font-size: 52px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

function Picture3() {
  return (
    <TagDiv>
      <Image
        src="/images/RRRRRR_sneaker_high_fear.png"
        alt="single sample white shoe"
        width={200}
        height={200}
      />
      <div>
        <h3 className={ruthie.className} hidden>Motion W.S.</h3> 
        <StyledBtnGray>Comprar</StyledBtnGray>
      </div>
    </TagDiv>
  )
}

export default Picture3
