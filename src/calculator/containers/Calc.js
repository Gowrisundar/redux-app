import React, {useRef} from 'react'
import {connect} from 'react-redux'
import { addInputs, subtractInput } from '../actions/calcActions'

const Calc = (props) => {

    const input1= useRef()
    const input2=useRef()
    let intA,intB
  return (
    <div className='bg-info'>
        <h4>Calculator</h4>
        <div>
            Input1 : <input type="text" ref={input1} />
        </div>
        <div>
            Input2 : <input type="text" ref={input2} />
        </div>
        <div>
            <button onClick={ ()=>{
                intA=parseInt(input1.current.value)
                intB=parseInt(input2.current.value)
                props.dispatch(addInputs(intA,intB))
              }
            } className="btn btn-success"> ADD</button>
        </div>

        <div>
            <button onClick={ ()=>{
                intA=parseInt(input1.current.value)
                intB=parseInt(input2.current.value)
                props.dispatch(subtractInput(intA,intB))
              }
            } className="btn btn-success"> SUBTRACT</button>
        </div>

        <div>
            Output: <input type="text" readonly value={props.outputProp}/>
        </div>
    </div>
  )
}


const mapstateToProps = (state) => ({
    outputProp: state.output
})

export default connect(mapstateToProps) (Calc)