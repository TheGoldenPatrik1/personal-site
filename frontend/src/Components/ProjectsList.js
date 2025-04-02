import { bool } from 'prop-types'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import ReactGA from 'react-ga4'

import { IoMdStarOutline } from 'react-icons/io'
import { PiGitFork } from 'react-icons/pi'

import { createDataReducer } from '../utilities'

import '../Styles/ItemList.css'

const handleClick = (hasHref, name) =>
    hasHref
        ? () =>
              ReactGA.event({
                  category: 'User Interaction',
                  action: 'Clicked Project',
                  label: name
              })
        : undefined

const formatName = (name) =>
    name
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

const ProjectCard = ({ item }) => (
    <Col sm={12} md={6} lg={4} className="mb-3">
        <Card
            as="a"
            href={item.html_url}
            className="item-list-card"
            target="_blank"
            rel="noreferrer"
            onClick={handleClick(item.html_url, item.name)}
        >
            <Card.Body>
                <Card.Title>{formatName(item.name)}</Card.Title>
                <Card.Subtitle>{item.description}</Card.Subtitle>
                <Card.Text>
                    {item.language || 'MarkDown'}{' '}
                    {item.stargazers_count > 0 && (
                        <>
                            | {item.stargazers_count}
                            <IoMdStarOutline
                                size={20}
                                className="project-icon"
                            />
                        </>
                    )}
                    {item.forks_count > 0 && (
                        <>
                            | {item.forks_count}
                            <PiGitFork size={20} className="project-icon" />
                        </>
                    )}
                    <br />
                    {item.topics
                        .filter(
                            (v) =>
                                v.toLowerCase() !== item.language?.toLowerCase()
                        )
                        .join(', ')}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
)

const ProjectList = ({ partialDisplay = false }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const url = 'https://api.github.com/users/TheGoldenPatrik1/repos'
        const cachedData = sessionStorage.getItem(url)
        if (cachedData) {
            setData(JSON.parse(cachedData))
            return
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const parsedData = data
                    .filter((d) => !d.fork)
                    .sort(
                        (a, b) =>
                            b.stargazers_count - a.stargazers_count ||
                            b.forks_count - a.forks_count ||
                            new Date(b.pushed_at) - new Date(a.pushed_at)
                    )
                sessionStorage.setItem(url, JSON.stringify(parsedData))
                setData(parsedData)
            })
            .catch((error) => console.error('Error fetching projects:', error))
    }, [])

    if (!data.length) return null

    const dataCutoff = partialDisplay ? 3 : data.length
    const classes = `item-list${partialDisplay ? ' item-list-projects' : ''}`

    const renderRows = (colSize) =>
        data
            .slice(0, dataCutoff)
            .reduce(createDataReducer(colSize), [])
            .map((row, index) => (
                <div
                    key={index}
                    className={`row-${index + 1} ${colSize === 3 ? 'd-lg-flex d-md-none d-sm-flex' : 'd-none d-lg-none d-md-flex d-sm-none'}`}
                >
                    <Row className="mt-4">
                        {row.map((item, idx) => (
                            <ProjectCard key={idx} item={item} />
                        ))}
                    </Row>
                </div>
            ))

    return (
        <div className={classes}>
            {renderRows(3)}
            {renderRows(2)}
            {partialDisplay && (
                <Button
                    href="/projects"
                    className="item-list-button"
                    onClick={handleClick(true, 'View All')}
                >
                    View All
                </Button>
            )}
        </div>
    )
}

ProjectList.propTypes = {
    partialDisplay: bool
}

export default ProjectList
