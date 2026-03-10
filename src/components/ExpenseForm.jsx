import { useState } from "react";

function ExpenseForm({ addExpense }) {

    //stores all inputs
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    //we use prevent default to stops page from refreshing when form submits
    const handleSubmit = (e) => {
        e.preventDefault();

        const expense = { name, amount, category };

        addExpense(expense);

        //it resets form/ clears input fields
        setName("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">

            <input
                placeholder="Expense name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>

                <option>Food</option>
                <option>Travel</option>
                <option>Utilities</option>
                <option>Marketing</option>
                <option>Other</option>

            </select>

            <button>Add Expense</button>

        </form>
    );
}

export default ExpenseForm;