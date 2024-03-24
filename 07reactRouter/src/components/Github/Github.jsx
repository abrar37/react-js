// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


export default function Github(){

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/abrar37")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])


    return(
        <div className="bg-gray-600 text-white text-3xl p-5">
            <h4>Github UserName: {data.login}</h4>
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}


export const githubLoaderInfo = async () => {
    const res = await fetch("https://api.github.com/users/abrar37")

    return res.json()
}