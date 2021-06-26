import React from 'react'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementFilter from '../layouts/JobAdvertisementFilter'
import JobAdvertisementList from './JobAdvertisementList'
import Slogan from '../layouts/Slogan'
import Footer from '../layouts/Footer'

export default function Dashboard() {

    return (
        <div>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={4}>
                        <JobAdvertisementFilter />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobAdvertisementList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Slogan />
            <Footer/>
        </div>
    )
}
