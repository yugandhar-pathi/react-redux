import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { incrementCounter, decrementCounter } from '../../store/count/countActionCreators'
import { selectCounterValue } from '../../store/count/countSelectors'

import { setItem } from '../../store/item/itemActionCreators';


const RegisterItem = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [itemName, setItemName] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    
    // Read counter value from store
    const counter = useSelector(selectCounterValue)

    const updateItemName = (evt) => setItemName(evt.target.value)
    const updateItemPrice = (evt) =>  setItemPrice(evt.target.value)

    
    const registerItem = () => {
        // Save Item details to store
        dispatch(setItem({ itemName, itemPrice}))
        history.push('/display-item')
    }

    // Incrment counteer value in store
    const incCounter = () => dispatch(incrementCounter())
    // Decrement counter value in store
    const decCounter = () => dispatch(decrementCounter())

    return (
        <>
           <p>Register Item Page</p>
           <form>
            <label>ItemName</label><br/>
            <input id="itemName" type="string" onChange={updateItemName}/><br/>
            <label>ItemPrice</label><br/>
            <input id="itemPrice" type="number" onChange={updateItemPrice}/>   <br/><br/>
            <button onClick={registerItem}>RegisterItem</button>     
           </form>
           <hr/>
           <p>Counter : {counter}</p>
           <button onClick={incCounter}>Inc</button>
           <button onClick={decCounter}>Dec</button>
        </>
    )
}

export default RegisterItem;