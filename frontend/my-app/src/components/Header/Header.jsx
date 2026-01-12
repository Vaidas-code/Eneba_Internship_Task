import './Header.css'
import SearchInput from '../SearchInput/SearchInput'

export default function Header() {
  return (
    <header className="h2DMqW app-header">
      <div className="VZWwFk header-inner">
        <a className="jfM2eM logo-link" href="/list/" title="Eneba" aria-label="Eneba">
          <img src="https://static.eneba.games/branding/v2/logoFull.svg" alt="Eneba logo" decoding="async" />
        </a>

        <div className="header-search-lang-row">
          <form className="TbbCET" action="/list/store/all" style={{display:'flex',alignItems:'center'}}>
            <div className="search-svg-wrapper">
              <SearchInput />
            </div>
            <button className="IrsXHn P9RW96 w6wAha lang-button" title="Nustatymai" aria-label="Nustatymai" type="button" style={{marginLeft:'8px'}}>
              <span>
                <span className="W_jtsk">
                  <img src="https://static.eneba.games/flags/lang/v2/lithuania.svg" alt="lithuania" height="16" width="16" />
                </span>
              </span>
              <span>
                <span className="CWVp7R">
                  <span>English</span>
                  <span className="E2fm8y">EU |</span>
                  <span className="hpg3x5">EUR</span>
                </span>
              </span>
            </button>
          </form>
        </div>

        <div className="header-icons">
          <button className="Cm8Xkx" aria-label="Norų sąrašas" title="Norų sąrašas" type="button" style={{background:'none',border:'none',padding:0,cursor:'default'}} disabled>
            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" style={{maxWidth:'24px', minWidth:'24px', height:'auto'}}>
              <path d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <button type="button" className="HWYfxM" aria-label="Mano pirkinių krepšelis" title="Mano pirkinių krepšelis">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'24px', minWidth:'24px', height:'auto'}}>
              <path d="M12 12.7499H5.386C5.1498 12.75 4.9212 12.6664 4.74067 12.5139C4.5602 12.3615 4.43953 12.1502 4.4 11.9173L2.642 1.58395C2.60233 1.35119 2.4816 1.13996 2.30113 0.987686C2.12067 0.835406 1.89213 0.7519 1.656 0.751953H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M10.75 14.75C10.8881 14.75 11 14.6381 11 14.5C11 14.3619 10.8881 14.25 10.75 14.25" stroke="currentColor"></path>
              <path d="M10.75 14.75C10.6119 14.75 10.5 14.6381 10.5 14.5C10.5 14.3619 10.6119 14.25 10.75 14.25" stroke="currentColor"></path>
              <path d="M5.75 14.75C5.88807 14.75 6 14.6381 6 14.5C6 14.3619 5.88807 14.25 5.75 14.25" stroke="currentColor"></path>
              <path d="M5.75 14.75C5.61193 14.75 5.5 14.6381 5.5 14.5C5.5 14.3619 5.61193 14.25 5.75 14.25" stroke="currentColor"></path>
              <path d="M4.03141 9.75007H12.0787C12.5247 9.75001 12.9578 9.60094 13.3093 9.32647C13.6608 9.05207 13.9105 8.66801 14.0187 8.23541L14.9854 4.36873C15.0038 4.29499 15.0052 4.21802 14.9895 4.14366C14.9737 4.0693 14.9412 3.99952 14.8944 3.93961C14.8476 3.87971 14.7878 3.83126 14.7194 3.79795C14.6511 3.76465 14.5761 3.74736 14.5001 3.7474H3.01075" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <button type="button" className="profile-btn" aria-label="Profilis" title="Profilis">
            <img
              src="https://www.eneba.com/avatars/enebian-60f994ae47e48"
              alt="User avatar"
              className="header-avatar"
              tabIndex={0}
            />
          </button>
        </div>

        <div className="CnCqo4">
          <div className="IdNVkT">
            <div className="LK3Lbs">
            </div>
          </div>
        </div>
      </div>




      <div className="BEd3lu"><nav className="JjgYZ4"><ul className="osK4dT d3kAJw P8rtGW l0hbuc"></ul></nav></div> 
    </header>
  )
}
