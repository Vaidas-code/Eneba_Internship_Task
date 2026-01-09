

import React, { useState, useEffect } from 'react';
import './SearchInput.css';

export default function SearchInput() {
  // Get initial value from URL
  const getInitialValue = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('search') || '';
    }
    return '';
  };
  const [value, setValue] = useState(getInitialValue());

  // Keep input value in sync with URL changes
  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      setValue(params.get('search') || '');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="search-bar-wrapper search-wrapper" style={{ width: '100%' }}>
      <div className="search-inner">
        <span className="search-svg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M17 17L22.7499 22.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 10.25C1 12.7033 1.97455 15.056 3.70926 16.7907C5.44397 18.5254 7.79675 19.5 10.25 19.5C12.7033 19.5 15.056 18.5254 16.7907 16.7907C18.5254 15.056 19.5 12.7033 19.5 10.25C19.5 7.79675 18.5254 5.44397 16.7907 3.70926C15.056 1.97455 12.7033 1 10.25 1C7.79675 1 5.44397 1.97455 3.70926 3.70926C1.97455 5.44397 1 7.79675 1 10.25Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
          </svg>
        </span>
        <input
          type="search"
          name="search"
          className="search-input"
          placeholder="Ieškoti žaidimų, papildymų ir daugiau"
          autoComplete="off"
          autoCorrect="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Paieška"
        />
        {value && (
          <button
            type="button"
            className="search-clear-btn"
            title="Išvalyti paieškos tekstą"
            aria-label="Išvalyti paieškos tekstą"
            onClick={() => setValue("")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14" style={{ display: 'block' }}>
              <path fill="currentColor" fillRule="evenodd" d="M14 1.67L12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
