"use client"

import styled from "styled-components"
import imgLogo from "../../../../public/images/logo_modern.png"
import Image from 'next/image'

const TagDiv = styled.div`
  display: flex;
  align-items: center;
  
  h1 {
    letter-spacing: -1px;
  }
`

function Logo() {
  return (
    <TagDiv>
      <Image src={imgLogo} alt="teste" width={55} height={32}/>
      <h1>Motion</h1>
    </TagDiv>
  )
}

export default Logo;
