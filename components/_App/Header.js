import { Menu, Container,Image, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'
import Router, {useRouter} from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const user = false;
  const router = useRouter()

  function isActive(route){
      return route === router.pathname;
  }

  return (
    <Menu fluid id='menu' inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive('/')} >
            <Image size="mini"
            src="/static/logo.svg"
            style={{marginRight:'1em'}}/>
            VerdeVida
          </Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item header active={isActive('/cart')}>
            <Icon name="shopping basket"
            size="large"/>
            Basket
          </Menu.Item>
        </Link>

        { user &&  <Link href="/create">
          <Menu.Item header active={isActive('/create')}>
            <Icon name="add square"
            size="large"/>
            Create
          </Menu.Item>
        </Link>}

        {user ? (<>
        <Link href="/account">
          <Menu.Item header active={isActive('/account')}>
            <Icon name="user"
            size="large"/>
            Account
          </Menu.Item>
        </Link>

 
          <Menu.Item header>
            <Icon name="sign out"
            size="large"/>
            Log out
          </Menu.Item>
        </>)
        :
        (<>
        <Link href="/login">
          <Menu.Item header active={isActive('/login')}>
            <Icon name="sign in"
            size="large"/>
            Signin 
          </Menu.Item>
        </Link>

        <Link href="/signup">
          <Menu.Item header active={isActive('/signup')}>
            <Icon name="signup"
            size="large"/>
            Signup
          </Menu.Item>
        </Link>
        </>)}

      </Container>
    </Menu>
  );
}

export default Header;
