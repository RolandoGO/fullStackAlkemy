import { deleteUserOperation } from "../services/operationService"



export function itemsNum(data){

    if(data.length > 10){
        const newData = []
        for(let i = 0; i<=9;i++)newData.push(data[i])
        return newData
    }

    else return data

  }

  export function trimDataTime(data){

    const newData = data.map(op=>{
      const obj = {...op, operation_date : op.operation_date.replace(/(t|z|(.000))/gi," ").trim()}
      return obj
      
    })

    return newData
  }
  
  export function totalBalance(data){

    const reducer = (partialSum, a) => partialSum + a
    const ingresos = data.filter(op=>op.operation_type === "ingreso").map(num=>num.amount).reduce(reducer,0)
    const egresos = data.filter(op=>op.operation_type === "egreso").map(num=>num.amount).reduce(reducer,0)
    return ingresos - egresos
    

}




