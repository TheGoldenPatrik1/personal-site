import { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import CodingImage from '../Images/Coding.jpg';
import UAImage from '../Images/University-of-Alabama.jpg';
import UnumImage from '../Images/Unum-Columbia.webp';

import '../Styles/MainCarousel.css';

function MainCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
        imageSource: CodingImage,
        imageAlt: "Code Editor",
        headerText: "Passionate Programmer",
        paragraphText: "JavaScript, Java, Python, C++, SQL"
    },
    {
        imageSource: UAImage,
        imageAlt: "View of the University of Alabama",
        headerText: "Computer Science and Math Student",
        paragraphText: "University of Alabama, May of 2025"
    },
    {
        imageSource: UnumImage,
        imageAlt: "Unum Building in Columbia, SC",
        headerText: "Software Development Intern",
        paragraphText: "At Unum in Columbia, SC for Summer 2024"
    }
  ];

  return (
    <div className="main-carousel">
        <Carousel activeIndex={index} onSelect={handleSelect} inteval={3000} className="bg-dark">
            {data.map((item, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={item.imageSource} alt={item.imageAlt} />
                    <Carousel.Caption>
                        <div className="d-none d-xl-block d-lg-block d-md-block">
                            <h3>{item.headerText}</h3>
                            <p>{item.paragraphText}</p>
                        </div>
                    </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
        <div className="d-sm-block d-xl-none d-lg-none d-md-none">
            <Card>
                <Card.Title className="bg-dark text-light">{data[index].headerText}</Card.Title>
                <Card.Body>
                    <Card.Text>{data[index].paragraphText}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
  );
}

export default MainCarousel;