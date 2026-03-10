//import all things
import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";
import "./App.css";

function App() {

    //stores all expenses and update our expense array
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    //to add new expenses
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    //to delete expenses from an array
    const deleteExpense = (index) => {
        const updated = expenses.filter((_, i) => i !== index);
        setExpenses(updated);
    };

    //calculate total
    const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
    return (
        <div className="app">

            <h1 className="title">Expense Tracker</h1>

            <div className="dashboard">

                {/*this component to add expenses*/}
                <ExpenseForm addExpense={addExpense} />

                <SummaryPanel expenses={expenses} total={total} />

                <CurrencyConverter total={total} />

            </div>

            {/*this show all expenses*/}
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

        </div>
    );
}

export default App;