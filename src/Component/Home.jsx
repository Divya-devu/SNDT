import React from 'react'
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



export const Home = () => {
  return (
    <>
    
      <div>
        <div className='container-fluid' >
          <div className="row">
            <div className="col-sm-12">
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.sndt.ac.in/sites/default/files/styles/newslider/public/2022-11/mou-with-bmcc-cuny-new-york-at-rajbhavan-2.jpg?itok=KNCIS-sI"
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.sndt.ac.in/sites/default/files/styles/newslider/public/2022-09/Bronx-Community-College-Visit-3.jpg?itok=9G-mDkmB"
                    alt="Second slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.sndt.ac.in/sites/default/files/styles/newslider/public/2022-11/doon-university-1.jpg?itok=j5HlsrEf"
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>

            {/* Tag Line */}<br />
            <div className='tagLine'>
              <h1><i>"An Enlightened Woman is a source of infinite strength"</i></h1>
            </div><br />


              {/* cards */}
              <CardGroup>
      <Card>
        <Card.Img variant="top" className='displayImg' src="https://www.sndt.ac.in/sites/default/files/styles/admin/public/2018-05/cap.png?itok=8fiUsQT" />
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
          SNDT Women’s University is the first Women’s university in India as well as in South-East Asia. The University 
          was founded by Maharshi Dr. Dhondo Keshav Karve in 1916 for a noble cause of Women’s Education.
           The first five women graduated in 1921 from this University.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" className='displayImg' src="https://www.sndt.ac.in/sites/default/files/styles/admin/public/2018-05/KARVE.png?itok=16r25c1p" />
        <Card.Body>
          <Card.Title>Founder</Card.Title>
          <Card.Text>
          The University was founded by Maharshi Dr. Dhondo Keshav Karve in 1916 for a noble cause of Women’s Education.{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" className='displayImg' src="https://www.sndt.ac.in/sites/default/files/styles/admin/public/2018-05/usong_0.png?itok=4vSUgO3r" />
        <Card.Body>
          <Card.Title>University Song</Card.Title>
          <Card.Text>
          "An Enlightened Woman is a source of infinite strength" We proclaim, The world is our family, India our home We are not helpless, 
          nor are we powerless. Enriched by our culture, we are all empowered. 
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}
