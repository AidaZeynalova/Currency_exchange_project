import { useState } from "react";
import CurrencyListItem from "../currencyListItem/CurrencyListItem"
import currencyService from "../../services/currencyService";
import './currencyList.scss'

const CurrencyItem = ({ defaultCurrenies, selectedCurrency }) => {

    const {exchangeFromTo} = currencyService()

    const [exchangedValue, setExchangedValue] = useState();

    // const showResult = () => {
    //     if (selectedCurrency &&  selectedCurrency.toCurrency && selectedCurrency.fromCurrency) {
    //         exchangeFromTo(selectedCurrency.fromCurrency, selectedCurrency.toCurrency, 1)
    //             .then(res => setExchangedValue(JSON.parse(res)))
    //     }
    // }



    return (
        <>
            <ul className="currency-list-container">
                {
                    defaultCurrenies && defaultCurrenies.map(x=>
                        <li key={x.currency}>
                            <CurrencyListItem currency={x.currency} value={x.value}  />    
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default CurrencyItem