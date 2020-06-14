import React,{useContext} from 'react';
import Child from './Child'
import Child2 from './Child2'
import NumberContext from './NumberContext'
function Parent(){
    let values = useContext(NumberContext)
    return (
        <div>
            Parent {values}
            <Child></Child>
            <Child2></Child2>
        </div>
    )
    
}
export default Parent