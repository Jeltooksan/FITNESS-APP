import React from 'react';

export default function NavigationBar({ currentPage, setCurrentPage }) {
  const tabs = [
    { id: 0, label: '1. Home / Splash' },
    { id: 1, label: '2. Add Activity' },
    { id: 2, label: '3. Heart Rate' }
  ];

  return (
    <div style={styles.tabBar}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setCurrentPage(tab.id)}
          style={{
            ...styles.tabBtn,
            ...(currentPage === tab.id ? styles.activeTab : {})
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

const styles = {
  tabBar: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    backgroundColor: '#1E1E22',
    padding: '6px',
    borderRadius: '12px'
  },
  tabBtn: {
    background: 'none',
    border: 'none',
    color: '#8E8E93',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '13px',
    transition: 'all 0.2s'
  },
  activeTab: {
    backgroundColor: '#FF6B00',
    color: '#FFF'
  }
};
