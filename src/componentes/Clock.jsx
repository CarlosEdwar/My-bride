import { HeartPulse } from 'lucide-react';
import React, { useState, useEffect } from 'react';

    const Clock = ({ startDate }) => {
        const calculateTimeDifference = () => {
            const now = new Date();
            const start = new Date(startDate);
            const diff = Math.abs(now - start);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            return { days, hours, minutes, seconds }; };
            const [timeDiff, setTimeDiff] = useState(calculateTimeDifference);

        useEffect(() => {
            const interval = setInterval(() => {
                 setTimeDiff(calculateTimeDifference()); }, 1000);
                 return () => clearInterval(interval);},
                [startDate]);

        
        return ( 
            <div className=' bg-slate-200 font-serif rounded-md w-96 h-44 p-8  justify-center'>
             <h1>O TEMPO DE DEUS</h1>
             <p>O nosso inicio: {new Date(startDate).toLocaleDateString('pt-BR')}
             </p>
            <p>Até aonde chegamos: {timeDiff.days} dias, {timeDiff.hours} horas, {timeDiff.minutes} minutos, {timeDiff.seconds} segundos</p>
            <h1>Amo Você </h1>
            <p className='ml-36'><HeartPulse/></p>
            </div>
            ); 
            
    };



export default Clock;