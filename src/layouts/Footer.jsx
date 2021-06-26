import React from 'react'
import { Grid, Icon, Menu } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div>
            <Grid columns={3} divided className='footer'>
                <Grid.Row>
                    <Grid.Column>
                        <Icon name='sitemap' size='big'/>
                        <Menu.Item name='İş İlanları'/>
                        <Menu.Item name='İlan Yayınlama'/>
                        <Menu.Item name='Üye Girişi'/>
                        <Menu.Item name='Üyelik Bireysel Aday'/>
                        <Menu.Item name='Üyelik Firma'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='handshake' size='big'/>
                        <Menu.Item name='İletişim'/>
                        <Menu.Item name='Hakkımızda'/>
                        <Menu.Item name='Kullanım Şartları'/>
                        <Menu.Item name='Gizlilik'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='linkify' size='big'/>
                        <Menu.Item name='Instagram:/adasdasd'/>
                        <Menu.Item name='Twitter:/asdasda'/>
                        <Menu.Item name='Linkedin:/asdasdas'/>
                        <Menu.Item name='YouTube:/asdasdas'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
