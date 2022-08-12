import { useState } from 'react';
import { dataHistory } from './dataHistory'
import './App.css';
import arms from './arms.jpg'

function History() {
    const [history] = useState(dataHistory);
    const [showText, setShowText] = useState(false);

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }
    
    return(
        <div>
            <div className='container'>
                <h1>The history of manicure.</h1>
            </div>
        
        <div className='container'>
            <img className='imgHistory' src={arms} width="500px" alt='arms'/>
        </div>

        {history.map((item => {
            const {id, name, description, showMore} = item

            return(
                <div key={id}>
                    <div className='container'>
                    <h3 className='his'> - {name} - </h3>
                    </div>

            <div className="container">
                    <p>{showMore ? description : description.substring(0,190) + '....'}
                    <button className='btn' onClick={() => showTextClick(item)}>{showMore ? 'Show less' : 'Show more'}</button>
                    </p>
            </div>
                </div>
            )
        }))}
    

    </div>
    )
    
}

export default History;