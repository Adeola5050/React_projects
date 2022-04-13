import React, {useState} from 'react';
import BudgetEntry from "./BudgetEntry";
import BudgetDetails from "./BudgetDetails";
import "./budgetBody.css"
import budget from "../../Budget";
 
const BudgetBody = (props) => {
    const [ budget, setBudget ] = useState ([])
    let {balance, setBalance} = props

return (
    <div className="budget-body">
        <div className="text-intro">
            <h1>Welcome To Your Personal Budget</h1>
            <p>Enter the price, description and give a special name to your expenditure</p>
        </div>
        <div className="budget-body-sectioned">
            <BudgetEntry budget = {budget} setBudget = {setBudget} balance = {balance} setBalance = {setBalance}/>
            <BudgetDetails budget = {budget} setBudget = {setBudget} balance = {balance} setBalance = {setBalance}/>
        </div>
    </div>
  );    
};

export default BudgetBody