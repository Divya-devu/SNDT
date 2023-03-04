import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export const About = () => {
  return (
    <>
<img 
className='logo'
src='https://www.sndt.ac.in/sites/default/files/SNDT-LOGO-blue-300dp-2016.png'
alt='SNDT Logo' />
    
{/* Accordion */}
<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2>About Us</h2></Accordion.Header>
        <Accordion.Body>
        SNDT Women’s University is the first Women’s university in India as well as in South-East Asia. The University was
         founded by Maharshi Dr. Dhondo Keshav Karve in 1916 for a noble cause of Women’s Education. The first five women
          graduated in 1921 from this University. The University Headquarters is in Churchgate Campus, 
        Mumbai and the other two campuses of this University are at Juhu, Mumbai and Karve Road, Pune.<br />
        In a century old existence, the university has grown into a multidisciplinary institution hosting diverse 
        professional, technical and liberal arts programmes from K12 to PhD. SNDTWU is probably one such university where 
        there is Nursery school as laboratory for Human Development Department, Centres for Women's Studies, Inclusion and
         Exclusion, Distance Education, andhas affiliated institutions for doctoral programmes. Unlike most university's
          in the country which have to have state jurisdiction, SNDTWU is unique in terms of jurisdiction.
         SNDTWU can affiliate colleges/institutions anywhere in India with prior consent from the State Government.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2>Founder</h2></Accordion.Header>
        <Accordion.Body>
        The Vision Of Bharat Ratna Dr. D.K. Karve To Build A Citadel Of Learning For Women Is Encapsulated 
        In The Motto Of The University -<br /><br />
        'Sanskrita Stree Parashakti'<br />
        (An Enlightened Women Is A Source Of Infinite Strength).<br/>
        For Over Nine Decades, The University Has Been Striving For And Growing To Newer Heights Of Performance And Outreach.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h2>University Song</h2></Accordion.Header>
        <Accordion.Body>
        <i>"An Enlightened Woman is a source of infinite strength"</i><br /><br />
        We proclaim, The world is our family, India our home We are not helpless, nor are we powerless. Enriched by our 
        culture, we are all empowered. We have been illuminated by the flame of knowledge. The dream of Thackersey has
         been realised here, Maharshi Karves dedication has borne fruit here. This our luminious centre is, and we its
          radiating rays.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    

    </>
  )
}
