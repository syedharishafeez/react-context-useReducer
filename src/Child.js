import React, {useContext, useReducer} from 'react';
import NumberContext from './NumberContext'

function Child(){
    let values = useContext(NumberContext)
    return(
        <div>
            Child {values[0]} 
            
        </div>
    )
}

export default Child