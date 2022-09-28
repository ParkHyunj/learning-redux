import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail(){
    const toDos = useSelector((state) => state);
    const idd = useParams().id;
    const todoText = toDos.find((todo) => todo.id === parseInt(idd));
    return(
        <div>
            <h1>{todoText?.text}</h1>
            <h5>Created at: {todoText?.id}</h5>
        </div>
    );
}

export default Detail;