import React, { useEffect } from "react";

const Payroll : React.FC = ()=>{
    useEffect(()=>{
        document.title = "Payroll | Niural"
    },[])
    return (
        <div>
            Payroll
        </div>
    )
}

export default Payroll