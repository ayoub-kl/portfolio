/* eslint-disable import/no-anonymous-default-export */
import React , {useState , useEffect} from 'react'


const useBkImage  =(label) => {

    const [imageLabel,setImageLabel] = useState('')

    useEffect(() => {
        
        label !== "" && label!==undefined && setImageLabel(label)
    }, [label])
console.log(imageLabel)
return imageLabel
}
export default useBkImage