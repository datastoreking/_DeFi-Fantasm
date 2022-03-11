import React from 'react'
import {Image} from 'react-bootstrap'
import FooterImg from '../assets/img/footerimage.png'


export default function Footer() {
    
    return(
        <>
            <p className="footer">Developed by Fantasm Team <span><Image src={FooterImg} /></span>  2022</p>
        </>
    )
}