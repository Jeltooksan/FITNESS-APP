import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import SplashPage from './components/SplashPage';
import AddActivityPage from './components/AddActivityPage';
import HeartRatePage from './components/HeartRatePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedActivities, setSelectedActivities] = useState(['jogging-1']);

  const toggleActivity = (id) => {
    if (selectedActivities.includes(id)) {
      setSelectedActivities(selectedActivities.filter((item) => item !== id));
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  return (
    <div style={styles.container}>
      <NavigationBar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />

      <div style={styles.phoneFrame}>
        {currentPage === 0 && (
          <SplashPage onNext={() => setCurrentPage(1)} />
        )}

        {currentPage === 1 && (
          <AddActivityPage
            selectedActivities={selectedActivities}
            onToggleActivity={toggleActivity}
            onBack={() => setCurrentPage(0)}
            onNext={() => setCurrentPage(2)}
          />
        )}

        {currentPage === 2 && (
          <HeartRatePage onBack={() => setCurrentPage(1)} />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#121214',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  phoneFrame: {
    width: '375px',
    height: '760px',
    backgroundColor: '#FFFFFF',
    borderRadius: '40px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }
};