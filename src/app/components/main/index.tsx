'use client'

import Picture1 from './picture-1'
import Picture2 from './picture-2-top'
import Picture3 from './picture-3-bottom'
import styled from 'styled-components'

const TagMain = styled.main`
    margin-top: var(--margin-top);
    display: grid;
    width: 100vw;
    height: 600px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
     'picture1 picture1 picture2'
     'picture1 picture1 picture3';
`

function Main() {
  return (
    <TagMain>
      <Picture1 />
      <Picture2 />
      <Picture3 />
    </TagMain>
  )
}

export default Main
