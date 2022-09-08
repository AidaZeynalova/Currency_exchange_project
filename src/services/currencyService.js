const currencyService = () => {

    var myHeaders = new Headers();
    myHeaders.append("apikey", "irDi25u0HtLj9j1JTTFxkCX3AtMsa2VB");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const getCurrencyNames = () => {

        const response = fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
            .then(res=>res.text());
        return response;
    }


    const exchangeFromTo = (from = 'AZN', to='USD', amount = 1) => {
        const response = fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
            .then(response => response.text());
        
        return response;
    }

    return {getCurrencyNames,exchangeFromTo}
}

export default currencyService
