"use client"

export default function Error ({error, reset}){
    return(
        <div>
            This shit isn't working : {error.message}
        <button onClick={()=>reset()}></button>
        </div>
    )
}