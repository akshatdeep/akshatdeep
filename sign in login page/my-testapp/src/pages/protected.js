import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Protected(props){

    const { Pages } = props
    const navigate = useNavigate()
    
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })

    return(
        <div>
            <Pages/>
        </div>
    )


}



export default Protected