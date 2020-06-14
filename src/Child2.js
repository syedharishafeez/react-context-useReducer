import React, {useContext} from 'react'
import NumberContext from './NumberContext'

function Child2(){
    let values = useContext(NumberContext)
    return(
        <div>
            Child2 {values[0]}
            <button onClick={()=>{
                values[1]({type:"INCREMENT"})
            }}>INCREMENT</button>
        </div>
    )
}
export default Child2