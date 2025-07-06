import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1: Import

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const maxProgress = 100;
  const navigate = useNavigate(); // Step 2: Hook

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= maxProgress) {
          clearInterval(interval);
          setTimeout(() => navigate("/home"), 500); // Step 3: Navigate
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.text}>
        Loading <span style={styles.percent}>{progress}%</span>
      </div>
      <div style={styles.barContainer}>
        <div style={{ ...styles.bar, width: `${progress}%` }} />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: 'monospace',
    textAlign: 'center',
    width: '90%',
    maxWidth: '350px',
    padding: '0 1rem',
    marginTop: '1rem',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    letterSpacing: '1px',
    color: '#000',
  },
  percent: {
    fontWeight: 'bold',
    color: 'green',
  },
  barContainer: {
    width: '100%',
    height: '6px',
    backgroundColor: '#ddd',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: 'green',
    transition: 'width 0.1s ease-in-out',
  },
};

export default Loading;
