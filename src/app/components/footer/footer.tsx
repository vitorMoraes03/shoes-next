'use client'

import styled from 'styled-components'
import LogoGitHub from '../icons/logo-github'
import LogoLinkedin from '../icons/logo-linkedin'

const TagFooter = styled.footer`
  background-color: var(--main-color);
  color: var(--main-white);
  padding: 30px var(--space-big);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TagDivP = styled.div`
  p {
    opacity: 0.7;
  }
`

const TagDivSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
  align-items: center;

  h3 {
    font-size: 22px;
  }

  svg {
    fill: var(--main-white);
    margin-top: var(--space-small);
  }

  svg + svg {
    margin-left: var(--space-medium);
  }
`

function Footer() {
  return (
    <TagFooter>
      <TagDivP>
        <p>© 2023 Sem fins comerciais.</p>
      </TagDivP>
      <TagDivSocial>
        <h3>Siga-nos</h3>
        <div>
          <LogoLinkedin />
          <LogoGitHub />
        </div>
      </TagDivSocial>
    </TagFooter>
  )
}

export default Footer
