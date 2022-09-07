import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';
import currencyService from '../../services/currencyService'
import './fromTo.scss'

const FromTo = ({currencyNames, onSelectedCurrencyData}) => {

    const [selectedCurrency, setSelectedCurrency] = useState({
        fromCurrency: null,
        toCurrency: null
    })
    const onSelectedCurrency = (e) => {

        setSelectedCurrency({
            ...selectedCurrency,
            [e.target.name]: e.target.value
        });
    }

    useEffect(()=>{
        onSelectedCurrencyData(selectedCurrency)
    },[selectedCurrency]);


    const renderCurrency = (values) => {
        if(values){
            let currencies = Object.keys(values.symbols);
            return(
                <>
                    {
                        currencies.map(x=>
                            <option key={x}>{x}</option>    
                        )
                    }
                </>
            )
        }
        
    }

    return (
        <div className="currency-container">
            <select className="currency" name='fromCurrency' onChange={onSelectedCurrency}>
                {renderCurrency(currencyNames)}
            </select>
            <div>
                <FontAwesomeIcon className='icon-arrows' icon={faArrowRightArrowLeft} />
            </div>
            <select className="currency" name='toCurrency' onChange={onSelectedCurrency}>
                {renderCurrency(currencyNames)}
            </select>
        </div>
    )
}

export default FromTo