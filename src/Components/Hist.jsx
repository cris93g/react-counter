import React from 'react'

const Hist = ()=>{
   let local=[]
   local.push(Object.values(localStorage))
    return (
        <div>
            <h2>These were the numbers logged earlier today </h2>
            {local ? local.map(item =>{
                if(item !== undefined){
                return (
                <div>
                    <h2>{`${item},`}</h2>
                </div>
                )}
            }) :<p>sorry no entries</p>}
        </div>
    )
}

export default Hist