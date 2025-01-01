import {  ChevronsRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Second() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
    navigate('/Second')
    }

    return(
        
        <ul className="bg-slate-200 justify-center shadow rounded-md space-y-4 w-80 h-40 flex p-2 ">
            <li>Já tem tanto tempo que eu admiro e sou apaixonado pela pessoa que você é, que as vezes até perco a noção do tempo. Para ser mais preciso, vem ver comigo a quanto tempo estamos juntos</li>
            <button
                onClick= {() => handleButtonClick()}
                className="p-2 bg-slate-600 rounded-md">

                <ChevronsRightIcon/>
            </button>
        </ul>
        
    )
}

export default Second;