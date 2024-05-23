import './App.css';
import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
  // State to toggle confetti
  const [btn, setBtn] = useState(false);
   
  // State to hold window dimensions
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Function to detect and set window dimensions
  const detectSize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Effect to update window dimensions on resize
  useEffect(() => {
    window.addEventListener('resize', detectSize);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    
      <div className='flex' 
        onClick={() => setBtn(!btn)}>
            <button>Start Confetti</button>
     
        {btn && 
            <ReactConfetti 
            width={windowDimension.width}
            height={windowDimension.height}
            tweenDuration={10000}
            />
        }

       </div>

  );
};

export default Confetti;
