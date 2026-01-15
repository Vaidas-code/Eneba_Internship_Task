import React, { useState, useEffect } from 'react';

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
    <div className="relative flex items-center w-full">
      <div className="relative flex items-center w-full h-12 bg-transparent border-2 border-white">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M17 17L22.7499 22.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M1 10.25C1 12.7033 1.97455 15.056 3.70926 16.7907C5.44397 18.5254 7.79675 19.5 10.25 19.5C12.7033 19.5 15.056 18.5254 16.7907 16.7907C18.5254 15.056 19.5 12.7033 19.5 10.25C19.5 7.79675 18.5254 5.44397 16.7907 3.70926C15.056 1.97455 12.7033 1 10.25 1C7.79675 1 5.44397 1.97455 3.70926 3.70926C1.97455 5.44397 1 7.79675 1 10.25Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
        </span>
        <input
          type="search"
          name="search"
          className="w-full h-full pl-12 pr-12 bg-transparent border-none outline-none text-white placeholder:text-white/60 text-base appearance-none"
          placeholder="Ieškoti žaidimų, papildymų ir daugiau"
          autoComplete="off"
          autoCorrect="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Search"
        />
        {value && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer transition-transform hover:scale-110 group"
            title="Clear search"
            aria-label="Clear search"
            onClick={() => setValue("")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14" className="text-white group-hover:text-yellow-400 transition-colors">
              <path fill="currentColor" fillRule="evenodd" d="M14 1.67L12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
