import FromTo from "../components/fromTo/FromTo";
import Amount from "../components/amount/Amount";
import CurrencyList from "../components/currencyList/CurrencyList";
import currencyService from "../services/currencyService";
import { useState,useEffect } from "react";
import './app.scss';


const App = () => {

    const [defaultCurrenies,setDefaultCurrensies] = useState([
        {shortCurrency: 'USD',currency: 'Dollar',value: 0},
        {shortCurrency: 'EUR',currency: 'Euro',value: 0},
        {shortCurrency: 'TRY',currency: 'Tl',value: 0},
        {shortCurrency: 'RUB',currency: 'Rubl',value: 0}
    ]);

    const [selectedCurrencyData, setSelectedCurrencyData] = useState();
    const [currencyNames, setCurrencyNames] = useState();

    const {getCurrencyNames, exchangeFromTo} = currencyService()

    useEffect(() => {
        getCurrencyNames()
            .then(data => JSON.parse(data))
            .then(res => setCurrencyNames(res))
    }, []);

    const handleSubmitAmountInput = async(value) => {
        // setInputAmountData(value);
        for(let defaultCur of defaultCurrenies){
            console.log(selectedCurrencyData)
            if (selectedCurrencyData &&  defaultCur.shortCurrency && selectedCurrencyData.fromCurrency && value !== 0) {
                let response = await exchangeFromTo(selectedCurrencyData.fromCurrency, defaultCur.shortCurrency, value)
                    .then(res => JSON.parse(res))
                defaultCur.value = response.result;
            }
        }

        setDefaultCurrensies([...defaultCurrenies]);
    }

     return (
        <div className="main-container">
            <div className="container">
                <FromTo currencyNames = {currencyNames} onSelectedCurrencyData={setSelectedCurrencyData}/>
                <Amount onInputAmount={handleSubmitAmountInput} selectedCurrency={selectedCurrencyData}/>
                <CurrencyList defaultCurrenies = {defaultCurrenies} selectedCurrency={selectedCurrencyData}/>
            </div>
        </div>
    )
}

export default App