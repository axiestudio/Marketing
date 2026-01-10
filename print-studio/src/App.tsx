import { useState } from 'react';
import './styles/print.css';
import { BusinessCard } from './components/BusinessCard';
import { LinkedInBanner } from './components/LinkedInBanner';

function App() {
  const isBannerMode = new URLSearchParams(window.location.search).get('banner') === 'true';

  const [config, setConfig] = useState({
    name: 'Stefan Miranda',
    title: 'Co-Founder & Developer Relation',
    email: 'stefan@axiestudio.se',
    phone: '+46 735132620',
    website: 'axiestudio.se',
    tagline: 'The Future of Service', // Default EN
    lang: 'en'
  });

  const [lang, setLang] = useState<'en' | 'sv'>('en');

  const updateField = (field: string, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'sv' : 'en';
    setLang(newLang);
    setConfig(prev => ({
      ...prev,
      tagline: newLang === 'sv' ? 'FRAMTIDENS KUNDSERVICE' : 'The Future of Service'
    }));
  };

  if (isBannerMode) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000' }}>
        <LinkedInBanner />
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Configuration Panel - Hides when printing */}
      <div className="config-panel" style={{
        position: 'fixed', top: 0, right: 0, background: '#111', color: '#fff',
        padding: '20px', zIndex: 1000, borderLeft: '1px solid #333',
        display: 'block'
      }}>
        <style>{`@media print { .config-panel { display: none !important; } }`}</style>
        <h2>Print Studio Config</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>
            Name: <br />
            <input value={config.name} onChange={e => updateField('name', e.target.value)} />
          </label>
          <label>
            Title: <br />
            <input value={config.title} onChange={e => updateField('title', e.target.value)} />
          </label>
          <label>
            Email: <br />
            <input value={config.email} onChange={e => updateField('email', e.target.value)} />
          </label>
          <button onClick={toggleLang}>
            Switch to {lang === 'en' ? 'Swedish' : 'English'}
          </button>
        </div>
        <p style={{ fontSize: '0.8em', color: '#666', marginTop: '20px' }}>
          Press Ctrl+P to Print (PDF)
        </p>
      </div>

      {/* Render Area */}
      <div className="card-container">
        <BusinessCard
          {...config}
          logoUrl="/assets/logo.png"
          headshotUrl="/assets/stefan_headshot.png"
        />
      </div>
    </div>
  );
}

export default App;
