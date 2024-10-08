import { useState,useEffect } from "react";
// const abortConst = new AbortController
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
        if(err.name === "AbortError"){
            console.log("fetch");
            
        }else{
            setError(err.message)
            setIsLoading(false)
        }
           

    })
    // return () => abortConst.abort();
  
},[url])

    return{data,isLoading,Error}
   

}

export default useFetch;