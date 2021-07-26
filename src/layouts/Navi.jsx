import React, { useState } from 'react'
import { Menu, Container, Input, Icon } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Link } from 'react-router-dom'


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
      <Menu  size='massive' fixed="top" className="navi">
        <Container>
          <Menu.Item as={Link} to="/">
            <Icon name='handshake' size='big' color='teal' inverted />
          </Menu.Item>
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
