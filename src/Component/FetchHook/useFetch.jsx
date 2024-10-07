import { useState,useEffect } from "react";
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() =>{
        
        
        fetch(url)
        .then(res =>{
            
            if(!res.ok){
                throw Error("Can't fetch data from the url")
            }return res.json();
        })
        .then(data =>{
            // console.log(data);
            setData(data);
            setIsLoading(false)
            setError(null)
            
        })
    
    .catch(err =>{
        console.error(err);
            setError(err.message)
            setBlogs(null)
            setIsLoading(false)

    })
  
},[url])
    return{data,isLoading,Error}
}

export default useFetch;