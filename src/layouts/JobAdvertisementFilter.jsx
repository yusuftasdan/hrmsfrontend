import React from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'

export default function JobAdvertisementFilter() {
    return (
        <div>
            <Menu color='blue' inverted vertical>
                <Menu.Item name='Pozisyon' />
                <Menu.Item>
                    <Input placeholder='Pozisyon...' />
                </Menu.Item>
                <Menu.Item name='Şehir' />
                <Menu.Item>
                    <Input placeholder='Şehir...' />
                </Menu.Item>
                <Menu.Item name='Şirket' />
                <Menu.Item>
                    <Input placeholder='Şirket...' />
                </Menu.Item>

                <Button size='medium' color='green' fluid>Filtrele</Button>

            </Menu>
        </div>
    )
}
