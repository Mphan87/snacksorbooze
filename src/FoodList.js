import { tSExpressionWithTypeArguments } from "@babel/types";
import React from "react";
import { useState } from "react";
import Food from "./Food"
import FoodForm from "./FoodForm"

const FoodList = () => {
    const INITIAL_STATE = [
        { id: 1, foods: "cupcake" },
        { id: 2, foods: "poptart" }]

    const [items, setItem] = useState(INITIAL_STATE)
    const addItem = (foods) => {
        setItem(items => [...items, { foods }])
    }
    return (
        <div>
            <FoodForm addItem={addItem} />
            {items.map(item => <Food id={item.id} foods={item.foods} />)}
        </div>
    )
}
export default FoodList






