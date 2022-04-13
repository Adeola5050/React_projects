import React from 'react'
import{ toDateTimeLocal} from '../../util'
import './budgetBody.css'

const BudgetDetails = (props) => {
    let{budget, setBudget} = props
    
    // const deleteRow= (e) => {
    //     let td=e.target.parentNode;
    //     let tr=td.parentNode;
    //     tr.parentNode.removeChild(tr);
    // }
    const Delete =(objectId) =>{
        let newObject=[...budget]
        setBudget(newObject.filter((data, index)=> index !== objectId))
        let reversedBalance = balance +budgetAmount
        setBalance(reversedBalance)
    }
    return (
        <div className="budget-details-container">
            <h1>Details</h1>
            {budget.length >0
             ? 
             <table>
                 <tr className="table-header"> 
                     <th>Date</th>
                     <th>Budget name</th>
                     <th>Amount</th>
                     <th>Description</th>
                     <th></th>
                 </tr>

                 {budget.map((data, index)=>
                 <tr key={index} className="data-row">
                     <td>{toDateTimeLocal(data.date)}</td>
                     <td>{data.budgetName}</td>
                     <td>{data.budgetAmount}</td>
                     <td>{data.budgetDescription}</td>
                     <td className="table-delete-button">
                     <button style= {{ backgroundColor: "red", color: "white", padding:"2px 10px", border:"unset"}} onClick={()=> Delete(index, +data.budgetAmount)}>
                         Delete
                         </button>
                     </td>
                 </tr>)}
                 
             </table>
              : "Empty"}
        </div>
    )
}

export default BudgetDetails
