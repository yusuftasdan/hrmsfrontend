import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { Item, Card, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function JobAdvertisementList() {
    const [jobAdvertisements, setjobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.findByIsActive().then(result => setjobAdvertisements(result.data.data))

    }, [])
    return (
        <div>
            {
                jobAdvertisements.map((jobAdvertisement) => (
                    <Card fluid key={jobAdvertisement.id} as={Link} to={`/jobAdvertisements/${jobAdvertisement.id}`}>
                        <Card.Content textAlign="left">
                            <Item>
                                <Item.Content>
                                    <Item.Header as='b'>{jobAdvertisement.jobTitleTitle}</Item.Header>
                                </Item.Content>
                                <Item.Content>
                                    <Item.Meta>{jobAdvertisement.employerCompanyName}</Item.Meta>
                                    <Item.Description>{jobAdvertisement.cityCityName}</Item.Description>
                                    <Item.Extra>
                                        <Label>
                                            <Icon name="calendar" />
                                            <Label.Detail>{jobAdvertisement.creatingDate}</Label.Detail>
                                        </Label>
                                        <Label>
                                            <Icon name="calendar outline" />
                                            <Label.Detail>{jobAdvertisement.endingDate}</Label.Detail>
                                        </Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Card.Content>
                    </Card>
                ))
            }
        </div>
    )
}
