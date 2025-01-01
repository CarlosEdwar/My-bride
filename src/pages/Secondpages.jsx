
import React from 'react';
import Clock from '/src/componentes/Clock.jsx';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

function Secondpages() {
    const navigate = useNavigate('/Second');
    
        
    const startDate = '2023-08-15T00:00:00';

    return(
        <div className='w-screen h-screen bg-slate-500 justify-center flex text-center pt-16'>
        <Clock startDate={startDate}/>
        <div>
          <button
          className='bg-slate-200 rounded-md relative top-60 right-56 p-4'
          onClick={() => navigate(-1)}>
            <LogOut/>

          </button>
        </div>
        </div>
    );
}

export default Secondpages;