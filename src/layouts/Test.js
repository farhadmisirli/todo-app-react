import React, {useContext} from "react";

import Context from "../store/context";
import { TextField, Stack } from '@mui/material';


export default function Test() {

    const {state, actions} = useContext(Context);

    const changeValue = (e) => {
        actions({type: 'setState', payload: {...state, value: e.target.value}})
    }

    return <>
        <h1>{state.value}</h1>
        <TextField id="outlined-basic" label="Add new task" variant="outlined" className="task_input" onChange={(e) => changeValue(e)} />
    </>

}