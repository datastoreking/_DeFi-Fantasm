import React from 'react'
import {Navbar, Button, Dropdown, DropdownButton, Offcanvas, Container, Nav, Image} from 'react-bootstrap'
import Logo from '../assets/img/logo.png'
import MenuPic1 from '../assets/img/FSM.26a08c9ac39524cc989b.png'
import MenuPic2 from '../assets/img/XFTM.df5dd5d99aa13e9a2819.png'
import MenuPic3 from '../assets/img/XFTM.dertafef345.png'
import BtnPic from '../assets/img/ic-ghost.2d95302a05c82ed40b0ac9ad932972d9.svg'
import { FaBookOpen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'


export default function Topnavbar() {

    const [modalShow, setModalShow] = React.useState(false);
    
    return(
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />   
                    <Navbar.Brand href="#"><Image src={Logo} className="logo-pic" /></Navbar.Brand>
                    <Navbar>
                        <Nav className="menu-item">
							<Nav.Link href="/dashboard">Dashboard</Nav.Link>
							<Nav.Link href="/mint">Mint</Nav.Link>
							<Nav.Link href="/redeem">Redeem</Nav.Link>
							<Nav.Link href="/farm">Farms</Nav.Link>
							<Nav.Link href="/staking">Staking</Nav.Link>
                        </Nav>
                        <Nav className="menu-pic-btn">
                            <Button className="menubtn-group">
                                <span className="menu-pic"><Image src={MenuPic1} /></span> <span> $53.072</span>
                            </Button>
                            <Button className="menubtn-group">
                                <span className="menu-pic"><Image src={MenuPic2} /></span> <span> 1.002FTM</span> 
                            </Button>
                            <Button className="menubtn-group">
                                <span className="menu-pic"><Image src={MenuPic3}/></span> <span> $1.355</span> 
                            </Button>
                        </Nav>
                        <Nav className="wallet-pic-btn">
                            <Button className="connectwallet-btn" onClick={() => setModalShow(true)}>
                            <span><Image src={BtnPic} className="connectwallet-pic" /></span> <span> Connect Wallet</span>
                            </Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <DropdownButton align="end" title="⚬⚬⚬" id="dropdown-menu-align-end" className="more-btn">
                                <Dropdown.Item href="https://fantasm-finance.gitbook.io/" className="dropmenu" target="_blank"><span><FaBookOpen /></span> Documentations</Dropdown.Item>
                                <Dropdown.Item href="https://github.com/FantasmFinance" className="dropmenu" target="_blank"><span><FaGithub/></span> Github</Dropdown.Item>
                                <Dropdown.Item href="https://medium.com/@fantasmfinance" className="dropmenu" target="_blank"><span><FaMediumM /></span> Medium</Dropdown.Item>
                                <Dropdown.Item href="https://twitter.com/fantasm_finance" className="dropmenu" target="_blank"><span><FaTwitter /></span> Twitter</Dropdown.Item>
                                <Dropdown.Item href="https://t.me/fantasmfinance" className="dropmenu" target="_blank"><span><FaTelegramPlane/></span> Telegram</Dropdown.Item>
                                <Dropdown.Item href="https://discord.gg/RdNFVvPh" className="dropmenu" target="_blank"><span><FaDiscord/></span> Discord</Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                    </Navbar>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        >
                        <Offcanvas.Header>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <Image src={Logo} className="logo-pic-offcanvas" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Button className="connectwallet-btn connectwallet-pic-offcanvas" onClick={() => setModalShow(true)}>
                            <span><Image src={BtnPic} className="connectwallet-pic" /></span> <span> Connect Wallet</span>
                            </Button>
                            <Nav.Link href="/dashboard" className="nav-offcanvas">Dashboard</Nav.Link>
                            <Nav.Link href="/mint" className="nav-offcanvas">Mint</Nav.Link>
                            <Nav.Link href="/redeem" className="nav-offcanvas">Redeem</Nav.Link>
                            <Nav.Link href="/farm" className="nav-offcanvas">Farms</Nav.Link>
                            <Nav.Link href="/staking" className="nav-offcanvas">Staking</Nav.Link>
                            <DropdownButton id="dropdown-item-button" title="More">
                                <Dropdown.Item as="button">Documentations</Dropdown.Item>
                                <Dropdown.Item as="button">Github</Dropdown.Item>
                                <Dropdown.Item as="button">Medium</Dropdown.Item>
                                <Dropdown.Item as="button">Twitter</Dropdown.Item>
                                <Dropdown.Item as="button">Telegram</Dropdown.Item>
                            </DropdownButton>
                            <p className="token-price">TOKEN PRICE</p>
                            <div className="token-price-btn">
                                <span className="menu-pic-offcanvas"><Image src={MenuPic1} /></span> <span> $53.072</span>
                            </div>
                            <div className="token-price-btn">
                                <span className="menu-pic-offcanvas"><Image src={MenuPic2} /></span> <span> 1.002FTM</span> 
                            </div>
                            <div className="token-price-btn">
                                <span className="menu-pic-offcanvas"><Image src={MenuPic3}/></span> <span> $1.355</span> 
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}