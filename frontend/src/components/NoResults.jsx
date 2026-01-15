import React from 'react';

export default function NoResults({ search }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[320px] text-white mt-8">
      <div className="flex flex-col items-center justify-center relative">
        <span className="text-4xl text-yellow-300 font-bold -mb-2 z-10">?</span>
        <span role="img" aria-label="ghost" className="text-6xl block leading-none">👻</span>
      </div>
      <div className="mt-4 text-base font-normal text-center text-white/85">
        Atsiprašome, nepavyko rasti atitikmenų:
      </div>
      <div className="mt-2 text-2xl text-white font-bold break-all">{search}</div>
      <div className="mt-4 text-base text-white/85 text-center">
        Patikrink rašybą, išbandyk kitus raktinius žodžius arba naršyk mūsų produktų katalogą.
      </div>
    </div>
  );
}
