import { Parallax } from 'react-parallax';
import swapCoins from '../images/swapcloud-coins.png'

const ImageTwo = () => (
    <Parallax className ="image" bgImage={swapCoins} strength={800}>
        <div className='content-1'>
            <span className='text'>HERE WE GIVE YOU A SEEMLESS AND STRESSLESS TRANSACTION</span>
        </div>
    </Parallax>
);

export default ImageTwo;