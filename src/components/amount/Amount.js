import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate} from '@fortawesome/free-solid-svg-icons'
import currencyService from "../../services/currencyService";
import './amount.scss'

const Amount = ({onInputAmount, selectedCurrency}) => {

    const [amount, setAmount] = useState(0);
    const [exchangedValue, setExchangedValue] = useState();

    const {exchangeFromTo} = currencyService()

    const showResult = () => {
        if (selectedCurrency &&  selectedCurrency.toCurrency && selectedCurrency.fromCurrency && amount !== 0) {
            exchangeFromTo(selectedCurrency.fromCurrency, selectedCurrency.toCurrency, amount)
                .then(res => setExchangedValue(JSON.parse(res)))
        }
    }

    const handleSubmitExchangeAmount = () => {
        onInputAmount(amount);
        showResult();
    }

    return (
        <div className="amount-container">
            <div className="content">
                <p>Amount</p>
                <div className="input-amount-container">
                    <input type="text" value={amount} onChange={e => {
                        const re = /^(\d)*(\.)?([0-9]{1})?$/;
                        if(re.test(e.target.value)){
                            setAmount(e.target.value);
                        }
                        
                    }}/>
                    <button className="button-rotate" onClick={handleSubmitExchangeAmount}>
                        <FontAwesomeIcon className="rotate-icon" icon={faRotate}/>
                    </button>
                </div>
                <div>
                    <p>{exchangedValue && exchangedValue.result} {" "} {selectedCurrency && selectedCurrency.toCurrency}</p>
                </div>
            </div>
        </div>
    )
}

export default Amount