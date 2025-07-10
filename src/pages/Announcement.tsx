import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Announcement:React.FC = ()=>{
    const {id} = useParams()
    useEffect(()=>{
        document.title = `Announcement | ${id}`
    },[id])
    return(
        <div>
            Annoucement title is {id}
        </div>
    )
}

export default Announcement