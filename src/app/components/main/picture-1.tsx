'use client'

import styled from 'styled-components'
import Image from 'next/image'

const TagDiv = styled.div`
  grid-area: picture1;
  position: relative;

  div {
    position: absolute;
    color: var(--main-white);
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: var(--space-small);
    bottom: 0;
    width: 35%;
    padding: var(--space-medium) var(--space-small);
  }
`

function Picture1() {
  return (
    <TagDiv>
      <Image
        src="/images/woman-3.2-shoes-waves.png"
        alt="woman feet with shoes, waves coming out of it"
        // width={1536}
        // height={1024}
        fill
      />
      <div>
        <h1>'Comece seu ano' com leveza</h1>
        <p>Espumas de última tecnologia</p>
      </div>
    </TagDiv>
  )
}

export default Picture1
