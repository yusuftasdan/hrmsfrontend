import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
              <Button.Group>
                <Button onClick={signIn} color='yellow'>Giriş</Button>
                <Button.Or></Button.Or>
                <Button color='green'>Kayıt Ol!</Button>
              </Button.Group>
            </Menu.Item>
            
        </div>
    )
}