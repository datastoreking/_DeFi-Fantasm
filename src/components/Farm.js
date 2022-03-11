import React from 'react'
import {Image, Accordion, Form, FormControl, Nav} from 'react-bootstrap'
import MenuPic1 from '../assets/img/FSM.26a08c9ac39524cc989b.png'
import MenuPic2 from '../assets/img/XFTM.df5dd5d99aa13e9a2819.png'
import MenuPic3 from '../assets/img/XFTM.dertafef345.png'
import Vimg from '../assets/img/Huewr0000.png'
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Farm() {

    return(
        <>
            <section id="farm">
				<div className="farm-title">
					<span>FARMS</span>
					<div className='farm-title-R'>
                        <span>Rewards:</span>
                        <Image src={MenuPic1} />
                        <span>0 FSM</span>
                        <span className='claimbtn'>Claim All</span>
                    </div>
				</div>
                <div className='farm-body'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div className="farm-body-header-outline">
                                    <div className='farm-body-header-outline-item'>
                                        <Image src={MenuPic1} />
                                        <Image src={MenuPic3} />
                                        <span>FSM / FTM</span>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">Earn</div>
                                        <div>4,986 FSM per day</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">TVL</div>
                                        <div>$538,906</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">Deposited</div>
                                        <div>-</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">APR</div>
                                        <div>4,445%</div>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Deposit</span>
                                        <div>Balance: -</div>
                                    </div>
                                    <div className='deposit-bal-form'>
                                        <Form>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="0.0" 
                                            />
                                        </Form>
                                    </div>
                                    <div className='deposit-withdraw-btn'>
                                        <div className='deposit-btn'>
                                            Deposit
                                        </div>
                                    </div>
                                </div>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Withdraw</span>
                                        <div>Deposited: -</div>
                                    </div>
									<div className='deposit-bal-form'>
                                        <Form>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="0.0" 
                                            />
                                        </Form>
                                    </div>
                                    <div className='deposit-withdraw-btn'>
                                        <div className='deposit-withdraw-all'>
                                            Withdraw all
                                        </div>
										<div className='deposit-withdraw'>
                                            Withdraw
                                        </div>
                                    </div>
                                </div>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Reward</span>
                                    </div>
									<div className="reward-ratio">
										<div>
											<Image src={MenuPic1} /><span> - FSM</span>
										</div>
										<div><span className='claimbtn'>Claim</span></div>
									</div>
									<div className="reward-ratio">
										<div>
											<Nav.Link href="https://spookyswap.finance/add/0xaa621D2002b5a6275EF62d7a065A865167914801/FTM">Add LP</Nav.Link>
										</div>
										<div>
											<Nav.Link href="https://spookyswap.finance/pool">Remove LP</Nav.Link>
										</div>
									</div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <div className="farm-body-header-outline">
                                    <div className='farm-body-header-outline-item'>
                                        <Image src={MenuPic1} />
                                        <Image src={MenuPic2} />
                                        <span>FSM / XFTM</span>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">Earn</div>
                                        <div>1,534 FSM per day</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">TVL</div>
                                        <div>$170,391</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">Deposited</div>
                                        <div>-</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">APR</div>
                                        <div>4,804%</div>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Deposit</span>
                                        <div>Balance: -</div>
                                    </div>
                                    <div className='deposit-bal-form'>
                                        <Form>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="0.0" 
                                            />
                                        </Form>
                                    </div>
                                    <div className='deposit-withdraw-btn'>
                                        <div className='deposit-btn'>
                                            Deposit
                                        </div>
                                    </div>
                                </div>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Withdraw</span>
                                        <div>Deposited: -</div>
                                    </div>
									<div className='deposit-bal-form'>
                                        <Form>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="0.0" 
                                            />
                                        </Form>
                                    </div>
                                    <div className='deposit-withdraw-btn'>
                                        <div className='deposit-withdraw-all'>
                                            Withdraw all
                                        </div>
										<div className='deposit-withdraw'>
                                            Withdraw
                                        </div>
                                    </div>
                                </div>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Reward</span>
                                    </div>
									<div className="reward-ratio">
										<div>
											<Image src={MenuPic1} /><span> - FSM</span>
										</div>
										<div><span className='claimbtn'>Claim</span></div>
									</div>
									<div className="reward-ratio">
										<div>
											<Nav.Link href="https://spookyswap.finance/add/0xaa621D2002b5a6275EF62d7a065A865167914801/FTM">Add LP</Nav.Link>
										</div>
										<div>
											<Nav.Link href="https://spookyswap.finance/pool">Remove LP</Nav.Link>
										</div>
									</div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
						<Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <div className="farm-body-header-outline">
                                    <div className='farm-body-header-outline-item'>
                                        <Image src={MenuPic2} />
                                        <Image src={MenuPic3} />
                                        <span>XFTM / FTM</span>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">Earn</div>
                                        <div>12,658 FSM per day</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">TVL</div>
                                        <div>$17,393,919</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">Deposited</div>
                                        <div>-</div>
                                    </div>
                                    <div className='farm-body-header-outline-item farm-body-header-outline-item-ration'>
                                        <div className="farm-earn">APR</div>
                                        <div>392%</div>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Deposit</span>
                                        <div>Balance: -</div>
                                    </div>
                                    <div className='deposit-bal-form'>
                                        <Form>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="0.0" 
                                            />
                                        </Form>
                                    </div>
                                    <div className='deposit-withdraw-btn'>
                                        <div className='deposit-btn'>
                                            Deposit
                                        </div>
                                    </div>
                                </div>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Withdraw</span>
                                        <div>Deposited: -</div>
                                    </div>
									<div className='deposit-bal-form'>
                                        <Form>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="0.0" 
                                            />
                                        </Form>
                                    </div>
                                    <div className='deposit-withdraw-btn'>
                                        <div className='deposit-withdraw-all'>
                                            Withdraw all
                                        </div>
										<div className='deposit-withdraw'>
                                            Withdraw
                                        </div>
                                    </div>
                                </div>
                                <div className="deposit-form">
                                    <div className='deposit-bal'>
                                        <span>Reward</span>
                                    </div>
									<div className="reward-ratio">
										<div>
											<Image src={MenuPic1} /><span> - FSM</span>
										</div>
										<div><span className='claimbtn'>Claim</span></div>
									</div>
									<div className="reward-ratio">
										<div>
											<Nav.Link href="https://spookyswap.finance/add/0xaa621D2002b5a6275EF62d7a065A865167914801/FTM">Add LP</Nav.Link>
										</div>
										<div>
											<Nav.Link href="https://spookyswap.finance/pool">Remove LP</Nav.Link>
										</div>
									</div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <p className="nonofficial">NON-OFFICIAL FARMS</p>
                    <div className='nonofficial-farm'>
                        <div className="nonofficial-farm-L">
                            <Image src={MenuPic3}/>
                            <Image src={MenuPic2}/>
                            <div className='nonofficial-farm-M'>
                                <div>FTM/XFTM</div>
                                <div><span><Image src={Vimg}/></span> PanicSwap</div>
                            </div>
                        </div>
                        <div><Nav.Link href="https://panicswap.com/farms/10"><FaExternalLinkAlt/></Nav.Link></div>
                    </div>
                </div>
			</section>
        </>
    )
}