const currencyService = () => {

    var myHeaders = new Headers();
    myHeaders.append("apikey", "RWdzWnHpE8OtKbCnzN3cmS30fSUbOcCf");

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
