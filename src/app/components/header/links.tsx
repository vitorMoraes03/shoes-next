// "use client"

import styled from 'styled-components'
import Link from 'next/link'

const TagDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Links() {
  return (
    <TagDiv>
        <Link href="">Shop</Link>
        <div>
            {/* icone
            icone */}
        </div>
    </TagDiv>
  )
}

export default Links
