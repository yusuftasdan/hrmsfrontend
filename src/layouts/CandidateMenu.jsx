import React from 'react'
import { Menu } from 'semantic-ui-react'


export default function CandidateMenu() {
    return (
        <div>
            <Menu color='olive' inverted pointing vertical >
                <Menu.Item
                    name='Mesajlar'
                />
                <Menu.Item
                    name='Başvurular'
                />
                <Menu.Item
                    name='Kaydedilen ilanlar'
                />
            </Menu>
        </div>
    )
}
