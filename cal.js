const displayData=(content)=>{
    result.value+=content
}

const clearScreen=()=>{
    result.value=""
}

const evaluateExp=()=>{
    try{
        result.value=eval(result.value)
    }catch{
        result.value="Invalid Expression"
    }
}

const deleteLastItem=()=>{
    result.value=result.value.slice(0,-1)
}