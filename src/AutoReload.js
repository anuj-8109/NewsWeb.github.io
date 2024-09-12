import React, { useEffect } from 'react';

function AutoReload() {
  useEffect(() => {
    const reloadInterval = 100000; // Set the interval in milliseconds (e.g., 60 seconds)
    const reloadTimer = setInterval(() => {
      window.location.reload();
      // Reload the page
    }, reloadInterval);
    
    return () => {
      clearInterval(reloadTimer); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div>
      <p>Your content goes here.</p>
      <button onClick={AutoReload}>Click to Reload</button>
    </div>
  );
}

export default AutoReload;
