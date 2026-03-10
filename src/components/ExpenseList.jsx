function ExpenseList({ expenses, deleteExpense }) {

    return (

        <div className="expenses">

            <h2>Recent Expenses</h2>

            {/*map loops through all expenses*/}
            {expenses.map((exp, index) => (

                <div key={index} className="card expense-card">

                    <div>
                        {/*display expense lists*/}
                        <h4>{exp.name}</h4>
                        <p>{exp.category}</p>
                    </div>

                    <div className="right">

                        <h3>₹{exp.amount}</h3>

                        <button onClick={() => deleteExpense(index)}>
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>

    );
}
export default ExpenseList;