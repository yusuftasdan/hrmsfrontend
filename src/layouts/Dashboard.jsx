import React from 'react'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementFilter from '../layouts/JobAdvertisementFilter'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import Slogan from '../layouts/Slogan'
import Footer from '../layouts/Footer'
import JobAdvertDetail from '../pages/JobAdvertDetail'
import { Route } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={4}>
                        <JobAdvertisementFilter />
                    </Grid.Column>
                    <Grid.Column width={12}>
                       <Route exact path="/" component={JobAdvertisementList}/>
                       <Route exact path="/jobAdvertisements" component={JobAdvertisementList}/>
                       <Route path="/jobAdvertisements/:id" component={JobAdvertDetail}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Slogan />
            <Footer/>
        </div>
    )
}
