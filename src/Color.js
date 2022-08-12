import { useState } from 'react';
import { dataColor } from './dataColor';
import './App.css';

function Color() {
   
    const [colors, setColors] = useState(0);
    const { id, name, image } = dataColor[colors];

    const previousColor = () => {
        setColors((colors => {
            colors --;
            if (colors < 0) {
                return dataColor.length - 1;
            }
            return colors;
        }))
    }

    const nextColor = () => {
        setColors((colors => {
            colors ++;
            if (colors > dataColor.length -1) {
                colors = 0;
            }
            return colors;
        }))
    }

    return(
        <div key={id}>
        <div className='container'>
            <h2>Classic colors</h2>
        </div>

        <div className='container'>
            <p>{name}</p>
        </div>

        <div className='container'>
        <img className='imgColor' src={image} width="550px" alt='nail'/>
    </div>

    <div className='container'>
    <button className='btnColor' onClick={previousColor}>Previous</button>
    <button className='btnColor' onClick={nextColor}>Next</button>
        </div>
        
        <div className='container'>
            <h1>Color therapy</h1>
            </div>
            <div className='container'>
            <p>Color therapy is an ancient practice, but we actively use it in modern life. Perhaps everyone knows that some colors are soothing, while others provoke activity. Therefore, it is so rare to find a bedroom whose walls are painted red or orange. Colors affect our well-being.
    We subconsciously choose the shades of outfits that our nervous system needs most, whether they are calm or exciting colors. A properly selected manicure color will help to enhance this effect, because it is almost always in the field of view of its owner.
    What color of varnish should I choose?</p>
        </div>
        <div className='container'>
        <ul>
            <li><span className='red'>Red</span> - stimulates mental performance, increases blood pressure, accelerates heartbeat and is responsible for a surge of energy. However, it is he who makes us more creative and bold.</li>
            <li><span className='white'>White</span> - inspires optimism and evokes a good mood.</li>
            <li><span className='yellow'>Yellow</span> - helps to forget about sadness and brings back the joy of life.</li>
            <li><span className='green'>Green</span> - symbolizes harmony and helps to maintain balance in stressful situations.</li>
            <li><span className='blue'>Blue</span> - helps relieve stress and also improves the ability to think logically.</li>
            <li><span className='pink'>Pink</span> - helps to relieve stress and helps to get rid of fatigue.</li>
            <li><span className='brown'>Brown</span> - gives a sense of security and calms emotions.</li>
            <li><span className='black'>Black</span> -gives credibility to your words</li>
            

        </ul>
        </div>
        </div>
        
    )
}

export default Color;