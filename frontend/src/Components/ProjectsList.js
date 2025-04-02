import { bool } from 'prop-types'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import ReactGA from 'react-ga4'

import { IoMdStarOutline } from 'react-icons/io'
import { PiGitFork } from 'react-icons/pi'

import { createDataReducer } from '../utilities'

import '../Styles/ProjectsList.css'

const handleClick = (hasHref, name) => {
    if (hasHref) {
        return () => {
            ReactGA.event({
                category: 'User Interaction',
                action: 'Clicked Project',
                label: name
            })
        }
    }
}

const formatName = (name) => {
    const formattedName = name.replace(/-/g, ' ')
    return formattedName
        .split(' ')
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ')
}

function ProjectList({ partialDisplay = false }) {
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
            .catch((error) => {
                console.error('Error fetching projects:', error)
            })
    }, [])

    if (!data.length) {
        return null
    }

    let dataCutoff = data.length
    let classes = 'projects'

    if (partialDisplay) {
        dataCutoff = 3
        classes += ' partial-projrects'
    }

    return (
        <div className={classes}>
            {data
                .slice(0, dataCutoff)
                .reduce(createDataReducer(3), [])
                .map((item, index) => (
                    <div className="d-lg-flex d-md-none d-sm-flex" key={index}>
                        <Row className="mt-4">
                            {item.map((item, index) => (
                                <Col
                                    key={index}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    className="mb-3"
                                >
                                    <Card
                                        as="a"
                                        href={item.html_url}
                                        className="projects-card"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={handleClick(
                                            item.html_url,
                                            item.name
                                        )}
                                    >
                                        <Card.Body>
                                            <Card.Title>
                                                {formatName(item.name)}
                                            </Card.Title>
                                            <Card.Subtitle>
                                                {item.description}
                                            </Card.Subtitle>
                                            <Card.Text>
                                                {item.language || 'MarkDown'}{' '}
                                                {item.stargazers_count > 0 && (
                                                    <>
                                                        |{' '}
                                                        {item.stargazers_count}
                                                        <IoMdStarOutline
                                                            size={20}
                                                            className="project-icon"
                                                        />
                                                    </>
                                                )}
                                                {item.forks_count > 0 && (
                                                    <>
                                                        | {item.forks_count}
                                                        <PiGitFork
                                                            size={20}
                                                            className="project-icon"
                                                        />
                                                    </>
                                                )}
                                                <br />
                                                {item.topics
                                                    .filter(
                                                        (v) =>
                                                            v.toLowerCase() !==
                                                            item.language?.toLowerCase()
                                                    )
                                                    .join(', ')}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            {data
                .slice(0, dataCutoff)
                .reduce(createDataReducer(2), [])
                .map((item, index) => (
                    <div
                        className={`d-none d-lg-none d-md-flex d-sm-none row-${index + 1}`}
                        key={index}
                    >
                        <Row className="mt-4">
                            {item.map((item, index) => (
                                <Col
                                    key={index}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    className="mb-3"
                                >
                                    <Card
                                        as="a"
                                        href={item.html_url}
                                        className="projects-card"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={handleClick(
                                            item.html_url,
                                            item.name
                                        )}
                                    >
                                        <Card.Body>
                                            <Card.Title>
                                                {formatName(item.name)}
                                            </Card.Title>
                                            <Card.Subtitle>
                                                {item.description}
                                            </Card.Subtitle>
                                            <Card.Text>
                                                {item.language || 'MarkDown'}{' '}
                                                {item.stargazers_count > 0 && (
                                                    <>
                                                        |{' '}
                                                        {item.stargazers_count}
                                                        <IoMdStarOutline
                                                            size={20}
                                                            className="project-icon"
                                                        />
                                                    </>
                                                )}
                                                {item.forks_count > 0 && (
                                                    <>
                                                        | {item.forks_count}
                                                        <PiGitFork
                                                            size={20}
                                                            className="project-icon"
                                                        />
                                                    </>
                                                )}
                                                {item.topics
                                                    .filter(
                                                        (v) =>
                                                            v.toLowerCase() !==
                                                            item.language?.toLowerCase()
                                                    )
                                                    .join(', ')}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            {partialDisplay && (
                <Button
                    href="/projects"
                    className="projects-button"
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
