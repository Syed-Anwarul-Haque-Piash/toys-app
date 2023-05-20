import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-LEGEND`
    },[title])
}
export default useTitle