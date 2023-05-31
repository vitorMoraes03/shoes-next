'use client'

import styled from 'styled-components'
import Image from 'next/image'

const TagDiv = styled.div`
  grid-area: picture2;
  position: relative;
  color: var(--main-white);
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 300px;

  div {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`

function Picture2() {
  return (
    <TagDiv>
      <Image
        src="/images/DenizD_wearing_neon_jordan_shoes.png"
        alt="colorful shoes, city background at night"
        fill
      />
      <div>
        <h2>Tecnologia bla bla</h2>
        <p>Compre batom</p>
      </div>
    </TagDiv>
  )
}

export default Picture2
