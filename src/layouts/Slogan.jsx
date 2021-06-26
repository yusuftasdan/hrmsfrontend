import React from 'react'
import { Container, Dimmer, Segment, Header, Icon } from 'semantic-ui-react'

export default function Slogan() {
    return (
        <div>
            <Container className='dimer'>
                <Dimmer.Dimmable as={Segment}>
                    <Icon name='handshake' size='huge' color='teal' />
                    <Header as='h3' color='teal'>İŞVEREN VE ÇALIŞANI BULUŞTURAN PLATFORM</Header>
                    <Dimmer />
                </Dimmer.Dimmable>
            </Container>
        </div>
    )
}
