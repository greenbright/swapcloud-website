import { Parallax } from 'react-parallax';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import swapSocial from '../images/swapcloud-social.png'

const ImageTwo = () => (
    <Parallax className ="image" bgImage={swapSocial} strength={800}>
        <div className='content-1'>
            <span className='text'>Follow us on our social media platform</span>
        </div>
        <div className='content-social'>
       <FaFacebook/>
       <FaGoogle/>
       <FaXTwitter/>
       < FaLinkedin/>
        </div>
    </Parallax>
);

export default ImageTwo;