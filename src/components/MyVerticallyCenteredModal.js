import react from 'react'
import {Modal, Image} from 'react-bootstrap'
import Spiderpic from '../assets/img/Spiderimg.png'

import Metamaskimg from '../assets/img/Metamask-img.png'
import Walletconnectimg from '../assets/img/Walletconnectimg.png'
import Mathwalletimg from '../assets/img/MathWallet.07c4d10714a6e05f7575684ddb6c934a.svg'
import Trustwalletimg from '../assets/img/TrustWallet.7c7c5193ff52ebaab1450415bfdc119b.svg'
import Tokenpocketimg from '../assets/img/TokenPocker.84b7bc9d58c1e9e87ae717b23495dc9b.svg'
import Safewalletimg from '../assets/img/SafeWallet.7bfede86d2ef52e015e2185dc168f308.svg'

export default function MyVerticallyCenteredModal (props) {
    return (
        <Modal
            {...props}
            size="xs"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <Image src={Spiderpic} className="spiderpic"/>
                Sellect Wallet
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="walletbox-outline">
                <div className="walletbox">
                    <Image src={Metamaskimg} className="walletpic-size"/>
                    <span>Metamask</span>
                </div>
                <div className="walletbox">
                    <Image src={Walletconnectimg} className="walletpic-size"/>
                    <span>Wallet Connect</span>
                </div>
                <div className="walletbox">
                    <Image src={Mathwalletimg} className="walletpic-size"/>
                    <span>Math Wallet</span>
                </div>
                <div className="walletbox">
                    <Image src={Trustwalletimg} className="walletpic-size"/>
                    <span>Trust Wallet</span>
                </div>
                <div className="walletbox">
                    <Image src={Tokenpocketimg} className="walletpic-size"/>
                    <span>Token Packet</span>
                </div>
                <div className="walletbox">
                    <Image src={Safewalletimg} className="walletpic-size"/>
                    <span>Safe Wallet</span>
                </div>
            </div>
            </Modal.Body>
        </Modal>
    );
}