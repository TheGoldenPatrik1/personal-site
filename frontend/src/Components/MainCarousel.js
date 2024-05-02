import { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import CodingImage from '../Images/Coding.jpg';
import UAImage from '../Images/University-of-Alabama.jpg';
import UnumImage from '../Images/Unum-Columbia.webp';

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
        paragraphText: "At Unum in Columbia, SC during Summer 2024"
    }
  ];

  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect} inteval={3000} className="bg-dark" style={{padding: "5px"}}>
            {data.map((item, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={item.imageSource} alt={item.imageAlt} />
                    <Carousel.Caption>
                        <div className="d-none d-lg-block d-md-block">
                            <h3>{item.headerText}</h3>
                            <p>{item.paragraphText}</p>
                        </div>
                    </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
        <div className="dp-sm-block d-lg-none d-md-none">
            <br/>
            <Card>
                <Card.Body>
                    <Card.Title className="bg-dark text-light">{data[index].headerText}</Card.Title>
                    <Card.Text>{data[index].paragraphText}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
  );
}

export default MainCarousel;