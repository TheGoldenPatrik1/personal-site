import { useState } from 'react'
import { Carousel } from 'react-bootstrap'

import CodingImage from '../Images/Coding.jpg'
import FutureImage from '../Images/Future.png'
import UAImage from '../Images/University-of-Alabama.jpg'

import '../Styles/MainCarousel.css'

function MainCarousel() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    const data = [
        {
            imageSource: CodingImage,
            imageAlt: 'Code Editor',
            headerText: 'Passionate Programmer',
            paragraphText: 'JavaScript, Java, Python, C++, SQL'
        },
        {
            imageSource: UAImage,
            imageAlt: 'View of the University of Alabama',
            headerText: 'Computer Science & Math Student',
            paragraphText: 'University of Alabama, May of 2026'
        },
        {
            imageSource: FutureImage,
            imageAlt: 'Future',
            headerText: 'Aspiring Software Engineer',
            paragraphText: 'Looking for a Full-Time Role'
        }
    ]

    return (
        <div className="main-carousel">
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                inteval={3000}
                className="bg-dark"
            >
                {data.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carousel-image"
                            src={item.imageSource}
                            alt={item.imageAlt}
                        />
                        <Carousel.Caption>
                            <h3 className="carousel-text">{item.headerText}</h3>
                            <p className="carousel-subtext">
                                {item.paragraphText}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default MainCarousel
