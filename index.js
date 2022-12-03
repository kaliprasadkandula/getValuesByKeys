function getValueByKey(input,target)
{
    for(let key in input)
    {
        let value=input[key]
        if(key ===target){
            return value
        }
        let type=typeof value
        if(type==="object"||type==="array"){
            let output=getValueByKey(value,target)
            if(output){
                return output
            }
        }
              
    }
}

function getValuesByKeys(input,targetValues,finalOutput){
    if(!finalOutput){
        finalOutput={}
    }
    for(let key in input)
    {
        let value=input[key]
        if(targetValues.includes(key)){
            finalOutput[key]=value
            continue;
        }
        let type=typeof value
        if(type==="object"||type==="array"){
            finalOutput=getValuesByKeys(value,targetValues,finalOutput)
        }
              
    }
    return finalOutput;
}

module.exports={getValueByKey,getValuesByKeys}