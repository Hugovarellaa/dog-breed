import {
  HeaderContainer,
  ImageContainer,
  MenuNav,
  // eslint-disable-next-line prettier/prettier
  SignInButton
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <ImageContainer>
        <img
          src="/images/dog.svg"
          alt="um cachorro com uma mulher negra ajoelhada"
        />
        <img src="/images/mask-group.svg" alt="" />
      </ImageContainer>
      <MenuNav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </MenuNav>
      <SignInButton>Sign up</SignInButton>
    </HeaderContainer>
  )
}
