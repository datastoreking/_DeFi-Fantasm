import React from 'react'
import {Container, Row, Col, Image, Nav} from 'react-bootstrap'
import FSMHeader from '../assets/img/FSM.26a08c9ac39524cc989b.png'
import Metamaskimg from '../assets/img/Metamask-img.png'
import XFTMHeader from '../assets/img/XFTM.df5dd5d99aa13e9a2819.png'
import Stakingimg from '../assets/img/Stakingimg.png'
import Farmimg from '../assets/img/Farmimg.png'
import Collatimg from '../assets/img/Haerbcbaueer234234.png'
import Twapimg from '../assets/img/Faerniasdf123.png'
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Dashboard() {
    
    return(
        <>
            <Container>
                <div className="dashboard-title">Welcome to Fantasm</div>
                <p className="dashboard-subtitle">Fractional-Algorithmic Synthetic Token pegged to the value of 1 FTM on Fantom Opera</p>
                <Row>
                    <Col lg="12" md="12" sm="12" className="total_value">
                        Total Value Locked  
                        <span>$45,636,910</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" md="12" sm="12" className="FSM-L-R">
                        <div className="FSM FSM-L">
                            <div className="FSM-header">
                                <Image src={FSMHeader} />
                                <div>
                                    <div className="FSMSymbol">FSM</div>
                                    <Nav.Link href="https://ftmscan.com/token/0xaa621D2002b5a6275EF62d7a065A865167914801" className="FSMViewcontract">View Contract <span><FaExternalLinkAlt/></span></Nav.Link>
                                </div>
                                <div className="FSMPrice">
                                    <div>Price:<span> 30.020414 FTM</span></div>
                                    <div>$42.715168</div>
                                </div>
                            </div>
                            <div className="FSM-body">
                                <div className="FSM-body-content">
                                    <div>Circulating supply</div>
                                    <div className="divideline"></div>
                                    <div>103,710</div>
                                </div>
                                <div className="FSM-body-content">
                                    <div>Market Cap</div>
                                    <div className="divideline"></div>
                                    <div>$4,749,711</div>
                                </div>
                            </div>
                            <div className="FSM-footer">
                                <div className="FSM-wallet-btn"><span>+</span><span><Image src={Metamaskimg}/></span></div>
                                <div className="FSM-buy-btn">
                                    <Nav.Link href="https://app.firebird.finance/swap?outputCurrency=0xaa621D2002b5a6275EF62d7a065A865167914801&inputCurrency=ETH">BUY FSM</Nav.Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="12" sm="12" className="FSM-L-R">
                        <div className="FSM FSM-R">
                            <div className="FSM-header">
                                <Image src={XFTMHeader} />
                                <div>
                                    <div className="FSMSymbol">XFTM</div>
                                    <Nav.Link href="https://ftmscan.com/token/0xfBD2945D3601f21540DDD85c29C5C3CaF108B96F" className="FSMViewcontract">View Contract <span><FaExternalLinkAlt/></span></Nav.Link>
                                </div>
                                <div className="FSMPrice">
                                    <div>Price:<span> 1.001603 FTM</span></div>
                                    <div>$1.421191</div>
                                </div>
                            </div>
                            <div className="FSM-body">
                                <div className="FSM-body-content">
                                    <div>Circulating supply</div>
                                    <div className="divideline"></div>
                                    <div>9,782,638</div>
                                </div>
                                <div className="FSM-body-content">
                                    <div>Market Cap</div>
                                    <div className="divideline"></div>
                                    <div>$13,902,997</div>
                                </div>
                            </div>
                            <div className="FSM-footer">
                                <div className="FSM-wallet-btn"><span>+</span><span><Image src={Metamaskimg}/></span></div>
                                <div className="FSM-buy-btn-group">
                                    <div className="FSM-mint-btn">MINT</div>
                                    <div className="FSM-buy-btn">
                                        <Nav.Link href="https://app.firebird.finance/swap?outputCurrency=0xfBD2945D3601f21540DDD85c29C5C3CaF108B96F&inputCurrency=ETH">BUY XFTM</Nav.Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" md="12" sm="12" className="FSM-L-R">
                        <div className="FSM FSM-L">
                            <div className="Staking-header">
                                <Image src={Stakingimg} />
                                <div>
                                    <div className="StakingSymbol">STAKING</div>
                                </div>
                                <div className="FSMPrice">
                                    <Nav.Link href="https://fantasm.finance/staking" className="FSMViewcontract">GO TO STAKING</Nav.Link>
                                </div>
                            </div>
                            <div className="FSM-body Staking-body">
                                <div className="FSM-body-content Staking-body-content">
                                    <div>Staking APR</div>
                                    <div>0%</div>
                                </div>
                                <div className="FSM-body-content Staking-body-content">
                                    <div>Lock APR</div>
                                    <div>5,352%</div>
                                </div>
                                <div className="FSM-body-content Staking-body-content">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="12" sm="12" className="FSM-L-R">
                        <div className="FSM FSM-R">
                            <div className="Staking-header">
                                <Image src={Farmimg} />
                                <div>
                                    <div className="StakingSymbol">FARM</div>
                                </div>
                                <div className="FSMPrice">
                                    <Nav.Link href="/" className="FSMViewcontract">GO TO FARMS</Nav.Link>
                                </div>
                            </div>
                            <div className="FSM-body Farm-body">
                                <div className="FSM-body-content Staking-body-content">
                                    <div>FSM/FTM</div>
                                    <div>APR: 4,996%</div>
                                </div>
                                <div className="FSM-body-content Staking-body-content">
                                    <div>FSM/XFTM</div>
                                    <div>APR: 5,166%</div>
                                </div>
                                <div className="FSM-body-content Staking-body-content">
                                    <div>XFTM/FTM</div>
                                    <div>APR: 636%</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" md="12" sm="12" className="FSM-L-R">
                        <div className="FSM FSM-L">
                            <div className="Collat-outline">
                                <div className="colla-img"><Image src={Collatimg} /></div>
                                <div className="colla-content">
                                    <div>COLLATERAL RATIO</div>    
                                    <div className="lastupdate">Last update: 08/03/2022 03:09:05 GMT+8</div>
                                </div>
                                <div className="colla-number">96.1%</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="12" sm="12" className="FSM-L-R">
                        <div className="FSM FSM-R">
                            <div className="Collat-outline">
                                <div className="colla-img"><Image src={Twapimg} /></div>
                                <div className="colla-content">
                                    <div>XFTM 60-MIN TWAP</div>    
                                    <div className="lastupdate">Last update: 08/03/2022 03:09:00 GMT+8</div>
                                </div>
                                <div className="colla-number">1.005 FTM</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}