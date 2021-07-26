import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Grid, Icon } from 'semantic-ui-react'
import JobAdvertisementService from '../services/JobAdvertisementService'

export default function JobAdvertDetail() {

    const [jobAdvertisement, setjobAdvertisement] = useState({})
    let { id } = useParams()
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.findById(id).then(result => setjobAdvertisement(result.data.data))
    }, [id])

    return (
        <div>
            <Card fluid color="blue">
                <Card.Content>
                    <Card.Header>
                        {jobAdvertisement.jobTitle?.title}
                    </Card.Header>
                </Card.Content>
            </Card>
            <Card fluid color="blue">
                <Card.Content>
                    <Card.Header>
                       Açıklama
                    </Card.Header>
                    <Card.Description>
                        {jobAdvertisement.jobDescription}
                    </Card.Description>
                </Card.Content>
            </Card>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column width={8}>
          
                <Card fluid color="blue">
                    <Card.Content>
                    <Card.Header>
                        <Icon size="big" name="tasks"/>
                    </Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <Card.Description>
                        Açık Pozisyon : {jobAdvertisement.openPosition}
                    </Card.Description>
                    <Card.Description>
                        Minimum Maaş : {jobAdvertisement.minSalary}
                    </Card.Description>
                    <Card.Description>
                        Maksimum Maaş : {jobAdvertisement.maxSalary}
                    </Card.Description>
                    <Card.Description>
                        Çalışma Şekli : {jobAdvertisement.workingType?.workingType}
                    </Card.Description>
                    <Card.Description>
                        Çalışma Alanı : {jobAdvertisement.workPlace?.workPlace}
                    </Card.Description>
                    <Card.Description>
                        Son Başvuru : {jobAdvertisement.endingDate}
                    </Card.Description>
                    <Card.Description>
                        Yayınlanma Tarihi : {jobAdvertisement.creatingDate}
                    </Card.Description>
                    </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column width={8}>
                <Card fluid color="blue">
                    <Card.Content textAlign="left">
                        <Card.Description >
                           <Icon   size="big" name="building"/>
                        {jobAdvertisement.employer?.companyName}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content textAlign="left">
                        <Card.Description>
                            <Icon size="big" name="map marker alternate"/>
                            {jobAdvertisement.city?.cityName}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content textAlign="left">
                            <Card.Description>
                            <Icon size="big" name="globe"/>
                            {jobAdvertisement.employer?.webAddress}
                            </Card.Description>
                    </Card.Content>
                    <Card.Content textAlign="left">
                        <Card.Description>
                            <Icon size="big" name="mail"/>
                            {jobAdvertisement.employer?.emailAddress}
                        </Card.Description>
                    </Card.Content>

                </Card>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}
