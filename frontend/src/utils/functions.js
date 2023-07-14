export const fetchData = async (https://foodlab-khaki.vercel.app/, options)=>{
    try{
        const response = await fetch(https://foodlab-khaki.vercel.app/,options)
        if(response.status === 401){
            localStorage.clear()
            location.href = "/"
        }
        const data = await response.json()
        return data
    return data
    }catch(err){
        console.log(err)
    }
}

