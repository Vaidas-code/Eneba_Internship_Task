import SearchInput from '../SearchInput/SearchInput'

const LOGO_URL = 'https://static.eneba.games/branding/v2/logoFull.svg'
const FLAG_URL = 'https://static.eneba.games/flags/lang/v2/lithuania.svg'
const AVATAR_URL = 'https://www.eneba.com/avatars/enebian-60f994ae47e48'

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none">
      <path
        d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6 text-white" fill="none">
      <path d="M12 12.75H5.386a1 1 0 01-.986-.833L2.642 1.584a1 1 0 00-.986-.832H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.75" cy="14.5" r="0.25" stroke="currentColor" />
      <circle cx="5.75" cy="14.5" r="0.25" stroke="currentColor" />
      <path d="M4.031 9.75h8.047a1.5 1.5 0 001.44-1.082l.967-3.867a.5.5 0 00-.485-.627H3.011" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Logo() {
  return (
    <a href="/" title="Eneba" aria-label="Eneba" className="flex-shrink-0">
      <img src={LOGO_URL} alt="Eneba logo" className="h-8" decoding="async" />
    </a>
  )
}

function LanguageSelector() {
  return (
    <button
      type="button"
      title="Settings"
      aria-label="Settings"
      className="h-12 px-4 flex items-center gap-2 bg-transparent hover:text-yellow-400 transition-colors"
    >
      <img src={FLAG_URL} alt="lithuania" width="16" height="16" />
      <span className="flex items-center gap-1 text-white text-sm">
        <span>English</span>
        <span>EU |</span>
        <span>EUR</span>
      </span>
    </button>
  )
}

function IconButton({ icon, label, disabled = false, className = '' }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      className={`p-0 bg-transparent border-none transition-opacity hover:opacity-80 disabled:cursor-default disabled:opacity-50 ${className}`}
    >
      {icon}
    </button>
  )
}

function UserAvatar() {
  return (
    <button
      type="button"
      title="Profile"
      aria-label="Profile"
      className="flex items-center justify-center w-10 h-10 bg-transparent border-none rounded-full p-0 cursor-pointer hover:opacity-80 transition-opacity"
    >
      <img
        src={AVATAR_URL}
        alt="User avatar"
        className="w-8 h-8 rounded-full border border-white"
      />
    </button>
  )
}

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <Logo />
          <form className="flex items-center w-[500px]" action="/">
            <SearchInput />
          </form>
          <LanguageSelector />
        </div>

        <div className="flex items-center gap-4 pl-4">
          <IconButton icon={<HeartIcon />} label="Wishlist" />
          <IconButton icon={<CartIcon />} label="Shopping Cart" />
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}
