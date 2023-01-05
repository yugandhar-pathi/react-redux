import React from 'react'
import { useSelector } from 'react-redux';

import { selectItemName, selectItemPrice } from '../../store/item/itemSelectors';

const DisplayItem = () => {
    //Read Item details from store, using selectors
    const itemName = useSelector(selectItemName)
    const itemPrice = useSelector(selectItemPrice)
    return (
        <>
            <h1>Item Details:</h1>
            <h2>Item Name:{itemName}</h2>
            <h2>Item Price:{itemPrice}</h2>
        </>
    )
}

export default DisplayItem;