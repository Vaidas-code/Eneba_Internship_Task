import './NoResults.css';
import React from 'react';

export default function NoResults({ search }) {
  return (
    <div className="no-results-container">
      <div className="no-results-emoji-stack">
        <span className="no-results-question">?</span>
        <span role="img" aria-label="ghost" className="no-results-ghost">👻</span>
      </div>
      <div className="no-results-text">
        Atsiprašome, nepavyko rasti atitikmenų:
      </div>
      <div className="no-results-search">{search}</div>
      <div className="no-results-suggestion">
        Patikrink rašybą, išbandyk kitus raktinius žodžius arba naršyk mūsų produktų katalogą.
      </div>
    </div>
  );
}
