import React from 'react'
import {useState} from 'react'
import {Image, Form, FormControl, InputGroup, Button} from 'react-bootstrap'
import Arrowimg from '../assets/img/ic-arrow-down.e33e72f883ba1c753bc9134b4f1f90b3.svg'
import FTMlogoimg from '../assets/img/XFTM.dertafef345.png'
import Spiderpic from '../assets/img/Spiderimg.png'
import MenuPic1 from '../assets/img/FSM.26a08c9ac39524cc989b.png'
import MenuPic2 from '../assets/img/XFTM.df5dd5d99aa13e9a2819.png'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

export default function Redeem() {

    var FTMprice;
    var XFTMprice;
    const [modalShow, setModalShow] = React.useState(false);
    const[XFTMpricestate, setXFTMpricestate] = useState();
    const[slipageshowactive1, setSlipageshowactive1] = useState(false);
    const[slipageshowactive2, setSlipageshowactive2] = useState(false);
    const[slipageshowactive3, setSlipageshowactive3] = useState(false);

    const slipageshowactiveToggle1 = () => {
        setSlipageshowactive1(true);
        setSlipageshowactive2(false);
        setSlipageshowactive3(false);
    }

    const slipageshowactiveToggle2 = () => {
        setSlipageshowactive1(false);
        setSlipageshowactive2(true);
        setSlipageshowactive3(false);
    }

    const slipageshowactiveToggle3 = () => {
        setSlipageshowactive1(false);
        setSlipageshowactive2(false);
        setSlipageshowactive3(true);
    }

    const handleFTM = event => {
        FTMprice = parseFloat(event.target.value);
        XFTMprice = FTMprice - 0.3;
        setXFTMpricestate(XFTMprice);
        console.log(XFTMpricestate);
    }

    const getValue = (e) => {
       
    }

    return(
        <>
            <section id="redeem">
                <div className="mint-FTM">
                    <div className='FTM-section'>
                        <div className='FTM-title'>
                            <div className='FTM-title-L'>
                                <span>XFTM</span>
                            </div>
                            <div className='FTM-title-R'>
                                <span>Balance:</span><span> -XFTM</span>
                            </div>
                        </div>
                        <div className='FTM-form'>
                            <Image src={MenuPic2} />
                            <div style={{width: '100%'}}>
                                <Form>
                                    <Form.Control type="text" placeholder="0.0" onChange={handleFTM} 
                                    onKeyPress={(event) => {
                                        if (!/[+-]?\d+(?:[.,]\d+)?/.test(event.key)) {
                                        event.preventDefault();
                                        }
                                    }}/>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className='mint-arrow'>
                        <Image src={Arrowimg} />
                    </div>
                    <div className='plusbtn plusbtn-redeem'>+</div>
                    <div className='XFTM-section'>
                        <div className='FTM-title'>
                            <div className='FTM-title-L'>
                                <span>FTM</span><span>- 96.9%</span>
                            </div>
                            <div className='FTM-title-R'>
                                <span>Balance:</span><span> -FTM</span>
                            </div>
                        </div>
                        <div className='FTM-form'>
                            <Image src={FTMlogoimg} />
                            <div className='XFTM-show'>
                                {XFTMpricestate ? XFTMpricestate : ''}
                            </div>
                        </div>
                    </div>
                    <div className='XFTM-section'>
                        <div className='FTM-title'>
                            <div className='FTM-title-L'>
                                <span>FSM</span><span>- 3.1</span>
                            </div>
                            <div className='FTM-title-R'>
                                <span>Balance:</span><span> -FSM</span>
                            </div>
                        </div>
                        <div className='FTM-form'>
                            <Image src={MenuPic1} />
                            <div className='XFTM-show'>
                                {XFTMpricestate ? XFTMpricestate : ''}
                            </div>
                        </div>
                    </div>
                    <div className="mint-fee">
                        <span>Redeem Fee</span><span>0.5%</span>
                    </div>
                    <div className="mint-fee">
                        <span>Pool Balance</span><span>5,894,674.8 FTM</span>
                    </div>
                    <div className="mint-fee">
                        <span>Minimum Received</span><span>0 FTM</span>
                    </div>
                    <div className="mint-fee">
                        <span></span><span>0 FSM</span>
                    </div>
                    <div className="mint-fee">
                        <span>Rates</span><span>1 FSM = 14.103735 FTM</span>
                    </div>
                    <div className="mint-fee">
                        <span>Slippage</span>
                        <div className='slipage-group'>
                            <div className={slipageshowactive1 ? 'slipage-show-active': 'slipage-show'} 
                            onClick={slipageshowactiveToggle1}><span id="slipage1" onClick={getValue}>0.5</span>%</div>
                            <div className={slipageshowactive2 ? 'slipage-show-active': 'slipage-show'} 
                            onClick={slipageshowactiveToggle2}><span id="slipage2" onClick={getValue}>1</span>%</div>
                            <div className={slipageshowactive3 ? 'slipage-show-active': 'slipage-show'} 
                            onClick={slipageshowactiveToggle3}><span id="slipage3" onClick={getValue}>2</span>%</div>
                            <div>
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    placeholder="0.5"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon2"
                                    className='slipage-form'
                                />
                                <InputGroup.Text id="btnGroupAddon2">%</InputGroup.Text>
                            </InputGroup>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button className="connectwallet-btn connectwallet-btn-ftm" onClick={() => setModalShow(true)}>
                            Connect Wallet
                        </Button>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}