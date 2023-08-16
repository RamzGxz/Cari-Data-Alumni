import React, { useState, useEffect } from 'react';

function DateModule() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <p className='mb-0 text-white'>{currentDate.toLocaleString()}</p>
        </div>
    );
}

export default DateModule;
