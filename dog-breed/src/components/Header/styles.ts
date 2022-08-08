import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.1875rem;
  font-family: 'Seoulhangang', sans-serif;
  color: ${({ theme }) => theme.orange};
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img:first-child {
    width: 3.5rem;
    height: 3.5rem;
  }

  img:last-child {
    width: 8rem;
    height: 8rem;
  }
`

export const MenuNav = styled.nav`
  ul {
    display: flex;
    gap: 3.125rem;
    align-items: center;
    justify-content: space-between;

    li {
      color: ${({ theme }) => theme.black};
      font-size: 1rem;
      line-height: 36.14px;
    }
  }
`
export const SignInButton = styled.button`
  padding: 0.8rem 2.5rem;
  border-radius: 100px;
  border: none;
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
`
