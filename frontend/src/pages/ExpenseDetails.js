import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
            <div>
                Your Balance is ₹ {incomeAmt - expenseAmt}
            </div>
            < div className='sign'>
             Note: Add "-" sign before enter your expense amount
            </div>
           
            {/* Show Income & Expense amount */}
            <div className="amounts-container">
                Income
                <span className="income-amount">₹{incomeAmt}</span>
                Expense
                <span className="expense-amount">₹{expenseAmt}</span>
            </div>
        </div>
    )
}

export default ExpenseDetails