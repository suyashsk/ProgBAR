import React, { useState, useEffect } from 'react';

function Progress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(()=>{
        setProgress((oldProgress)=>{
            if(oldProgress === 100){
                return oldProgress;
            }
            const newProgess = oldProgress+0.5;
            return newProgess;
        })
    },200)
  }, []);

  return (
    <div style={{width:"500px",textAlign:"center",fontSize:"20px"
    }}>
        <p>Progess bar</p>
      <div style={{ width: '100%', backgroundColor: '#eee' ,borderRadius:"20px" }}>
        <div
          style={{
            width: `${progress}%`,
            height: '20px',
            backgroundColor: 'green',
             transition: 'width 0.2s ease',
             borderRadius:"20PX",
             position:"relative",
             textAlign:"center",
             
          }}
        ><p style={{color:"white"}}>{progress}%</p></div>
        
      </div>
      <p>{progress < 100 ? 'Loading...' : 'Complete'}</p>
    </div>
  );
}

export default Progress;
