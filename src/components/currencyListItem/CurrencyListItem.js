import './currencyListItem.scss'

const CurrencyListItem = ({currency, value}) => {
    return (
        <div className='currency-list-item-container'>
            <div className='currency-info'>
                <p>{currency}</p>
            </div>
            <div className='currency-calculation-result'>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default CurrencyListItem;