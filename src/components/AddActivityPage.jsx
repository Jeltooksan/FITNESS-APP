import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { ACTIVITIES } from '../data/activities';

export default function AddActivityPage({ 
  selectedActivities, 
  onToggleActivity, 
  onBack, 
  onNext 
}) {
  return (
    <div style={styles.pageContent}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>
          <ChevronLeft size={20} color="#000" />
        </button>
      </div>

      <div style={styles.titleSection}>
        <h1 style={styles.mainTitle}>Add New Activity</h1>
        <p style={styles.subTitle}>Please select activity type</p>
      </div>

      <div style={styles.grid}>
        {ACTIVITIES.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedActivities.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => onToggleActivity(item.id)}
              style={{
                ...styles.gridCard,
                ...(isSelected ? styles.selectedCard : {})
              }}
            >
              <div style={{
                ...styles.iconCircle,
                ...(isSelected ? styles.selectedIconCircle : {})
              }}>
                <Icon size={22} color={isSelected ? '#FFFFFF' : '#8E8E93'} />
              </div>
              <span style={{
                ...styles.cardText,
                ...(isSelected ? styles.selectedCardText : {})
              }}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 20 }}>
        <button style={styles.primaryBtn} onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

const styles = {
  pageContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    boxSizing: 'border-box'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  backBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '1px solid #E5E5EA',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  titleSection: {
    margin: '12px 0 20px 0'
  },
  mainTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1C1C1E',
    margin: '0 0 4px 0'
  },
  subTitle: {
    fontSize: '12px',
    color: '#8E8E93',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px'
  },
  gridCard: {
    backgroundColor: '#F2F2F7',
    borderRadius: '16px',
    padding: '16px 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'all 0.2s'
  },
  selectedCard: {
    backgroundColor: '#FF6B00',
    borderColor: '#FF6B00'
  },
  iconCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px'
  },
  selectedIconCircle: {
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  cardText: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1C1C1E'
  },
  selectedCardText: {
    color: '#FFF'
  },
  primaryBtn: {
    width: '100%',
    backgroundColor: '#FF6B00',
    color: '#FFF',
    border: 'none',
    borderRadius: '16px',
    padding: '16px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(255, 107, 0, 0.35)'
  }
};