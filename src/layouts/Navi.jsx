import React, {useState} from 'react'
import { Menu, Container, Input, Icon } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  function handleSignOut(params) {
    setIsAuthenticated(false)
  }
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu color='blue' inverted size='massive' fixed="top">
        <Container>

          <Icon name='handshake' size='huge' color='teal' inverted />
          <Container>
            <Menu.Item>
              <Input action='Ara' placeholder='Posizyon, Şehir veya Şirket' style={{ marginTop: '0.005em' }} />
            </Menu.Item>
          </Container>
          <Menu.Menu position='right'>
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>

      </Menu>

    </div>
  )
}
