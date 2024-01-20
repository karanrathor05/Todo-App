
import {useState} from 'react'

const useVal = () => {
    const[value,setValue]=useState(0)
    function inc(){
      setValue(value+1)
    }
    function dec(){
      setValue(value-1)
    }
    function res(){
      setValue(0)
    }
    return [value,inc,dec,res];
}

export default useVal