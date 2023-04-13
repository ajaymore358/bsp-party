import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidebar.css'
import Dropdown from 'rsuite/Dropdown'

export const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow}>
                <i class="ri-menu-fill"></i>
            </Button>

            <Offcanvas  show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{color: 'white',}}>Bahujan Samaj Party</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ul className='side'>
                    <li><a href="" style={{color:'' }}>Home</a> </li>
                    <li><a target={'_blank'} href="https://www.bspindia.co.in/about-us/">About</a> </li>
                    <li><a target={'_blank'} href="https://www.bspindia.co.in/our-leadership/">History of Leaders</a> </li>
                    <li><a target={'_blank'} href="https://www.bspindia.co.in/manyavar-shri-kanshiram/">Founder of the party</a> </li>
                    <li><a target={'_blank'} href="https://loksabha.nic.in/Members/PartyDetail.aspx?party_code=26">Party in parliament</a> </li>
                    <li><a target={'_blank'} href="">Organisation</a> </li>
                    <li><a target={'_blank'} href=""></a>Morcha </li>
                    <li><a target={'_blank'} href="https://www.bspindia.co.in/video-gallery/">Literature And Songs</a> </li>
                    <li><a target={'_blank'} href="https://www.bspindia.co.in/contact-us/">Contact us</a></li>
                    <li><a target={'_blank'} href="https://www.bspindia.co.in/books/">Books</a></li>
                    
                    {/* <li><a target={'_blank'} href="https://www.bing.com/news/search?q=Links&qpvt=news+links&FORM=EWRE">News Papers</a></li> */}
                    </ul>
                   
                   <Dropdown title="News Paper">
                <Dropdown.Item><a> Telugu News Paper</a></Dropdown.Item>
                <Dropdown.Item><a>The Hindu News Paper</a></Dropdown.Item>
                <Dropdown.Item><a>Deccan News Paper</a></Dropdown.Item>
                <Dropdown.Item><a></a></Dropdown.Item>
                
  
            </Dropdown>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

