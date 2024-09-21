const displayData=(content)=>{
    result.value += content
}
const clearcalculatorscreen=()=>{
result.value=""
}
const evaluvateexpression=()=>{
try{
    result.value=eval(result.value)
}catch{
    result.value="invalid expression"
}


}
const backspacedata=()=>{
    result.value =result.value.slice(0,-1)
}