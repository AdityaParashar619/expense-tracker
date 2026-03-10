import { useState, useEffect } from "react";

function CurrencyConverter({ total }) {

    const [rate, setRate] = useState(1);
    const [currency, setCurrency] = useState("USD");

    useEffect(() => {
        //call api
        fetch(`https://api.frankfurter.app/latest?from=INR&to=${currency}`)
            .then(res => res.json())
            .then(data => {
                //stores exchange rate
                setRate(data.rates[currency]);
            });

    }, [currency]);

    return(

        <div className="card">
            <h3>Currency Conversion</h3>
            <select onChange={(e)=>setCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>

            </select>
            <h2>
                {/*conversion rates*/}
                {(total * rate).toFixed(2)} {currency}
            </h2>
        </div>
    )
}

export default CurrencyConverter;