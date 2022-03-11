import React from 'react'
import {Image, Form, Button} from 'react-bootstrap'
import Qimg1 from '../assets/img/qqqqqqqqqq1.png'
import Qimg2 from '../assets/img/qqqqqqqqqq2.png'
import Qimg3 from '../assets/img/qqqqqqqqqqqq3.png'
import Timg from '../assets/img/aaaaaaaaa1.png'
import MenuPic1 from '../assets/img/FSM.26a08c9ac39524cc989b.png'
import Vestimg from '../assets/img/ic_no_data.e77af3dfbb31aeff2ed788697efc9da4.svg'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

export default function Staking() {

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <section id="staking">
				<div className='staking-outline'>
                    <div className='staking-outline-L'>
                        <div className='total-FSM'>
                            <div className='total-FSM-body'>
                                <div>
                                    <Image src={Qimg1} />
                                    <div>Total FSM Staked</div>
                                </div>
                                <div><span>9,840</span> FSM</div>
                            </div>
                            <div className='total-FSM-body'>
                                <div>
                                    <Image src={Qimg2} />
                                    <div>Total FSM Locked</div>
                                </div>
                                <div><span>45,692</span> FSM</div>    
                            </div>
                            <div className='total-FSM-body'>
                                <div>
                                    <Image src={Qimg3} />
                                    <div>Accumulated Fees</div>
                                </div>
                                <div><span>84,558.316</span> FTM</div>    
                            </div>
                        </div>
                        <div className='total-FSM'>
                            <div className='stake-FSM'>STAKE FSM</div>
                            <div className='stake-FSM-describe'>Stake FSM and earn platform fees with no lockup period</div>
                            <div className='stake-FSM-describe'>Stake FSM will ready in:</div>
                            <div className='staking-timer'>
                                <Image src={Timg} />
                                <div className='staking-counter'>
                                    <div className='staking-counter-piece'>
                                        <div className='counter-L'>
                                            <div className='counter-N'>01</div>    
                                            <div>Day</div>
                                        </div>
                                        <div className='counter-R'>:</div>
                                    </div>
                                    <div className='staking-counter-piece'>
                                        <div className='counter-L'>
                                            <div className='counter-N'>01</div>    
                                            <div>Hour</div>
                                        </div>
                                        <div className='counter-R'>:</div>
                                    </div>
                                    <div className='staking-counter-piece'>
                                        <div className='counter-L'>
                                            <div className='counter-N'>25</div>    
                                            <div>Minutes</div>
                                        </div>
                                        <div className='counter-R'>:</div>
                                    </div>
                                    <div className='staking-counter-piece'>
                                        <div className='counter-L'>
                                            <div className='counter-N'>52</div>    
                                            <div>Seconds</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lock-FSM'>
                            <div className='lock-FSM-title'>
                                <div className='lock-FSM-logo'>LOCK FSM</div>
                                <div>APR: <span className='lock-FSM-ratio'>4,335%</span></div>
                            </div>
                            <div className='stake-FSM-describe'>Lock FSM and earn platform fees and penalty fees in unlocked FSM</div>
                            <div className='stake-FSM-describe'>The lock date are grouped by the week. Any lock between Thursday 00:00 UTC to Wednesday 23:59 UTC are grouped in the same week group, and will release at the same time eight (8) weeks later.</div>
                            <div className='stake-FSM-describe'>Locked FSM will continue to earn fees after the locks expire if you do not withdraw.</div>
                            <div className='FTM-section'>
                                <div className='FTM-title'>
                                    <div className='FTM-title-L'>
                                        <span>Amount</span>
                                    </div>
                                    <div className='FTM-title-R'>
                                        <span>Wallet Balance:</span><span> -FSM</span>
                                    </div>
                                </div>
                                <div className='FTM-form'>
                                    <Image src={MenuPic1} />
                                    <div style={{width: '100%'}}>
                                        <Form>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="0.0" 
                                            />
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <div className="connect-btn">
                                <Button className="connectwallet-btn" onClick={() => setModalShow(true)}>
                                    <span>Connect</span>
                                </Button>
                            </div>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                    <div className='staking-outline-R'>
                        <div className='claim-FSM'>
                            <div className='claim-row'>
                                <div className="claim-row-L">
                                    <div>Claimable FSM</div>    
                                    <div className="claim-row-L claim-row-L-bottom">Include staked FSM and vested FSM</div>
                                </div>
                                <div>
                                    <div className='claim-row-R'>
                                        <Image src={MenuPic1}/>
                                        <span>- FSM</span>
                                    </div>
                                    <div className='claim-row-R-claim'>
                                        Claim
                                    </div>
                                </div>
                            </div>
                            <div className='claim-row'>
                                <div className="claim-row-L">
                                    <div>FSM in Vesting</div>    
                                    <div className="claim-row-L claim-row-L-bottom">FSM amount that can be claimed with a <span>50% penalty</span></div>
                                </div>
                                <div className='claim-row-R'>
                                        <Image src={MenuPic1}/>
                                        <span>- FSM</span>
                                    </div>
                            </div>
                            <div className='claim-row'>
                                <div className="claim-row-L">
                                    <div>Claim all FSM above</div>    
                                    <div className="claim-row-L claim-row-L-bottom">Early Exit Penalty</div>
                                </div>
                                <div>
                                    <div className='claim-row-R'>
                                        <Image src={MenuPic1}/>
                                        <span>- FSM</span>
                                    </div>
                                    <div className='claim-row-R-claim'>
                                        Claim with penalty
                                    </div>
                                </div>
                            </div>
                            <div className='claim-row'>
                                <div className="claim-row-L">
                                    <div>Expired Locked FSM</div>    
                                </div>
                                <div>
                                    <div className='claim-row-R'>
                                        <Image src={MenuPic1}/>
                                        <span>- FSM</span>
                                    </div>
                                    <div className='claim-row-R-claim'>
                                        Withdraw
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='FSM-vest'>
                            <div className='FSM-vest-title'>
                                <div className='FSM-vest-title-L'>FSM Vests</div>
                                <div>Total: -FSM</div>
                            </div>
                            <div className='FSM-vest-body'>
                                <Image src={Vestimg} />
                                <p>No vesting found</p>
                            </div>
                        </div>
                        <div className='FSM-vest'>
                            <div className='FSM-vest-title'>
                                <div className='FSM-vest-title-L'>FSM Locks</div>
                                <div>Total: -FSM</div>
                            </div>
                            <div className='FSM-vest-body'>
                                <Image src={Vestimg} />
                                <p>No locks found</p>
                            </div>
                        </div>
                        <div className='FSM-vest'>
                            <div className='FSM-vest-title'>
                                <div className='FSM-vest-title-L'>Claimable Fees</div>
                                <div>Total Value: $<span>0</span></div>
                            </div>
                            <div className='FSM-vest-body'>
                                <Image src={Vestimg} />
                                <p>You don't have any claimable fee yet</p>
                            </div>
                            <p >Claim all</p>
                        </div>
                    </div>
                </div>
			</section>
        </>
    )
}