import React from 'react'
import {useState} from 'react'
import {Image, Form, FormControl, InputGroup, Button} from 'react-bootstrap'
import Arrowimg from '../assets/img/ic-arrow-down.e33e72f883ba1c753bc9134b4f1f90b3.svg'
import FTMlogoimg from '../assets/img/XFTM.dertafef345.png'
import Spiderpic from '../assets/img/Spiderimg.png'
import FSMHeader from '../assets/img/FSM.26a08c9ac39524cc989b.png'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

export default function MintFTM() {

    var FTMprice;
    var XFTMprice;
    const [modalShow, setModalShow] = React.useState(false);
    const[XFTMpricestate, setXFTMpricestate] = useState();
    const[FTMValue, setFTMValue] = useState();

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
        var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
        if (!floatRegex.test(event.target.value)){
            setFTMValue(""); 
            setXFTMpricestate("");
        }
        else{
            FTMprice = parseFloat(event.target.value);
            XFTMprice = FTMprice - 0.3;
            setXFTMpricestate(XFTMprice);
            console.log(XFTMpricestate);
        }
        
    }
    
    return(
        <>
            <div className="mint-FTM">
                <div className='FTM-section'>
                    <div className='FTM-title'>
                        <div className='FTM-title-L'>
                            <span>FTM</span><span> -96.9%</span>
                        </div>
                        <div className='FTM-title-R'>
                            <span>Balance:</span><span> -FTM</span>
                        </div>
                    </div>
                    <div className='FTM-form'>
                        <Image src={FTMlogoimg} />
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
                <div className='plusbtn'>+</div>
                <div className='FTM-section'>
                    <div className='FTM-title'>
                        <div className='FTM-title-L'>
                            <span>FSM</span><span> -3.1%</span>
                        </div>
                        <div className='FTM-title-R'>
                            <span>Balance:</span><span> -FSM</span>
                        </div>
                    </div>
                    <div className='FTM-form'>
                        <Image src={FSMHeader} />
                        <div style={{width: '100%'}}>
                            <Form>
                                <Form.Control 
                                    type="text" 
                                    placeholder="0.0" 
                                    value={FTMValue}
                                    onChange={handleFTM} 
                                />
                            </Form>
                        </div>
                    </div>
                </div>
                <div className='mint-arrow'>
                    <Image src={Arrowimg} />
                </div>
                <div className='XFTM-section'>
                    <div className='FTM-title'>
                        <div className='FTM-title-L'>
                            <span>XFTM</span>
                        </div>
                        <div className='FTM-title-R'>
                            <span>Balance:</span><span> -XFTM</span>
                        </div>
                    </div>
                    <div className='FTM-form'>
                        <Image src={FTMlogoimg} />
                        <div className='XFTM-show'>
                            {XFTMpricestate ? XFTMpricestate : ''}
                        </div>
                    </div>
                </div>
                <div className="mint-fee">
                    <span>Mint Fee</span><span>0.3%</span>
                </div>
                <div className="mint-fee">
                    <span>Minimum Received</span><span>0 XFTM</span>
                </div>
                <div className="mint-fee">
                    <span>Rates</span><span>1 FSM = 15.355269 FTM</span>
                </div>
                <div className="mint-fee">
                    <span>Slippage</span>
                    <div className='slipage-group'>
                        <div className={slipageshowactive1 ? 'slipage-show-active': 'slipage-show'} 
                        onClick={slipageshowactiveToggle1}><span id="slipage1" >0.5</span>%</div>
                        <div className={slipageshowactive2 ? 'slipage-show-active': 'slipage-show'} 
                        onClick={slipageshowactiveToggle2}><span id="slipage2" >1</span>%</div>
                        <div className={slipageshowactive3 ? 'slipage-show-active': 'slipage-show'} 
                        onClick={slipageshowactiveToggle3}><span id="slipage3" >2</span>%</div>
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
        </>
    )
}