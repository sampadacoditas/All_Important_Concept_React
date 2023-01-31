import { Dispatch, SetStateAction } from "react"

export  interface IProps
{
    showProfile?:boolean,
    setShowProfile?:React.Dispatch<React.SetStateAction<boolean>>,
    username?:string,
    setUsername?: Dispatch<SetStateAction<string>>
}