import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "../../components/budget/BudgetBalance.css"

const BudgetBalance = (props) =>{
        const [input, setInput] = useState("")
        const [exchangeRate, setExchangeRate] = useState({})
        const [selectOption, setSelectOption] = useState("")



        const handleInput = (e) => {
            setInput(e.target.value)
        }

        const handleSelect= (e)=>{
           e.target.value===Object.keys(exchangeRate)[e] ?
           props.setBalance(1000 * exchangeRate[e.target.value]): 
          (selectOption==="" ? 
          props.setBalance(props.balance * exchangeRate[e.target.value])
          :props.setBalance(props.balance / exchangeRate[selectOption] * exchangeRate[e.target.value]))

          setSelectOption(e.target.value)
        }

        useEffect(() => {
            axios.get('https://v6.exchangerate-api.com/v6/b6c62b10f2232f584fe19957/latest/USD').then(
                (response) => {
                    setExchangeRate(response.data.conversion_rates)
                    setSelectOption(Object.keys(response.data.conversion_rates)[0])

                }
            )

        }, [])

     useEffect(() => {
            console.log("I just MOUNTED @ Budget Balance")
            return () => {
                console.log("I just UNMOUNTED @ Budget Balance")
            }
        }, [props.balance])

        return ( 

            <div className = "budgetBalance">
                <div className = "balance"> 
                 { props.balance } 
             </div>  
                <select className = "balance-dropdown" onChange={handleSelect}>
                {Object.keys(exchangeRate).length > 0 && 
                  Object.keys(exchangeRate).map(
                        (data, index) => <option keys= {index}>{data}</option>
    )}
                </select>

                <div className="balance-button">
                  <input type="number" onChange ={handleInput}/>
                    <button onClick = {() => props.setBalance(input)}>Update Balance</button>
              </div>      
          </div>
    
  )
}

export default BudgetBalance;
