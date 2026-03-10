function SummaryPanel({ expenses, total }) {

    //empty because to store category totals
    const categories = {};
    expenses.forEach((exp)=>{
        //if category doesn't exist create it
        if(!categories[exp.category]){
            categories[exp.category]=0;
        }
        //then add amount
        categories[exp.category]+=Number(exp.amount);
    });
    return(

        <div className="card">
            <h2>Total Spent</h2>
            <h1 className="balance">₹{total}</h1>
            <h3>Category Breakdown</h3>
            {Object.entries(categories).map(([cat, amount])=>(
                <p key={cat}>
                    {cat}: ₹{amount}
                </p>
            ))}

        </div>
    )
}

export default SummaryPanel;