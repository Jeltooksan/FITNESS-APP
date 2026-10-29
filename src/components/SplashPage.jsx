import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroImg from '../assets/hero-statue.jpg';

export default function SplashPage({ onNext }) {
  return (
    <div style={styles.page}>
      <div style={styles.heroWrapper}>
        <img 
          src={heroImg} 
          alt="Statue Hero" 
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay} />
      </div>

      <div style={styles.splashContent}>
        <h2 style={styles.splashTitle}>No Activities</h2>
        <p style={styles.splashSubtitle}>
          You have 0 Activities. Create a new one and start tracking your fitness activity.
        </p>
        <button style={styles.primaryBtn} onClick={onNext}>
          Add New Activity <ChevronRight size={18} style={{ marginLeft: 6 }} />
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  heroWrapper: {
    width: '100%',
    height: '62%',
    position: 'relative',
    backgroundColor: '#000'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
  },
  splashContent: {
    flex: 1,
    padding: '0 24px 32px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginTop: '-10px',
    zIndex: 2
  },
  splashTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#000',
    margin: '0 0 8px 0'
  },
  splashSubtitle: {
    fontSize: '13px',
    color: '#8E8E93',
    lineHeight: '1.4',
    margin: '0 0 20px 0',
    maxWidth: '260px'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(255, 107, 0, 0.35)'
  }
};