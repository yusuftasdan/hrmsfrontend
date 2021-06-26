import React, {useEffect, useState} from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { Table } from 'semantic-ui-react'

export default function JobAdvertisementList() {
    const [jobAdvertisements, setjobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.findByIsActive().then(result => setjobAdvertisements(result.data.data))

    }, [])
    return (
        <div>
            <Table color='blue' celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Şirket</Table.HeaderCell>
                        <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map((jobAdvertisement) => (
                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.jobTitleTitle}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.cityCityName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employerCompanyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.creatingDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.endingDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
