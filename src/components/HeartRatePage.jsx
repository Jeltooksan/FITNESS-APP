import React from 'react';
import { ChevronLeft } from 'lucide-react';
import heroImg from '../assets/hero-statue.jpg';

export default function HeartRatePage({ onBack }) {
  return (
    <div style={styles.pageContent}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={onBack}>
          <ChevronLeft size={20} color="#000" />
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <h2 style={{ fontSize: 18, fontWeight: '700', margin: 0, color: '#1C1C1E' }}>
          Heart Rate
        </h2>
      </div>

      <div style={styles.bpmContainer}>
        <div style={styles.bpmValue}>
          112 <span style={styles.bpmUnit}>bpm</span>
        </div>
        <p style={styles.bpmStatus}>Currently doing: Basketball</p>
      </div>

      <div style={styles.statueCardContainer}>
        <img 
          src={heroImg} 
          alt="Fitness Character" 
          style={styles.heartRateImage}
        />
        
        <div style={styles.statOverlayLeft}>
          <div style={styles.metricTitle}>Pressure</div>
          <div style={styles.metricVal}>112 <span style={styles.metricSub}>mmHg</span></div>
        </div>

        <div style={styles.statOverlayRight}>
          <div style={styles.metricTitle}>Oxygen</div>
          <div style={styles.metricVal}>112 <span style={styles.metricSub}>SpO2</span></div>
        </div>
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
  bpmContainer: {
    textAlign: 'center',
    margin: '24px 0 16px 0'
  },
  bpmValue: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#1C1C1E',
    lineHeight: '1'
  },
  bpmUnit: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#8E8E93'
  },
  bpmStatus: {
    fontSize: '12px',
    color: '#8E8E93',
    marginTop: '6px'
  },
  statueCardContainer: {
    position: 'relative',
    width: '100%',
    flex: 1,
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: '#000',
    marginTop: '10px'
  },
  heartRateImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  statOverlayLeft: {
    position: 'absolute',
    bottom: '20px',
    left: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(8px)',
    padding: '10px 14px',
    borderRadius: '16px',
    minWidth: '90px'
  },
  statOverlayRight: {
    position: 'absolute',
    bottom: '20px',
    right: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(8px)',
    padding: '10px 14px',
    borderRadius: '16px',
    minWidth: '90px'
  },
  metricTitle: {
    fontSize: '10px',
    color: '#8E8E93',
    fontWeight: '600'
  },
  metricVal: {
    fontSize: '14px',
    fontWeight: '800',
    color: '#1C1C1E',
    marginTop: '2px'
  },
  metricSub: {
    fontSize: '10px',
    fontWeight: '500',
    color: '#8E8E93'
  }
};