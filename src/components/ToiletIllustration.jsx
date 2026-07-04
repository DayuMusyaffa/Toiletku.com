const ToiletIllustration = ({ compact = false }) => {
  return (
    <svg viewBox="0 0 420 360" role="img" aria-label="Ilustrasi toilet ceria" className="h-auto w-full">
      <rect x="38" y="252" width="304" height="38" rx="19" fill="#87dfe9" />
      <rect x="91" y="41" width="145" height="118" rx="24" fill="#ffffff" stroke="#183034" strokeWidth="8" />
      <rect x="113" y="62" width="101" height="24" rx="12" fill="#bfeef4" />
      <path
        d="M124 145h167c18 0 32 14 32 32v24c0 49-40 89-89 89h-50c-49 0-89-40-89-89v-27c0-16 13-29 29-29Z"
        fill="#ffffff"
        stroke="#183034"
        strokeWidth="8"
      />
      <ellipse cx="210" cy="185" rx="80" ry="34" fill="#e6f8fb" stroke="#183034" strokeWidth="8" />
      <ellipse cx="210" cy="184" rx="45" ry="15" fill="#87dfe9" />
      <path d="M151 285h117l-15 39H139l12-39Z" fill="#ffffff" stroke="#183034" strokeWidth="8" />
      <path d="M128 324h143" stroke="#183034" strokeWidth="8" strokeLinecap="round" />
      <circle cx="283" cy="81" r="26" fill="#ffd35a" stroke="#183034" strokeWidth="8" />
      <path d="M272 82l9 9 17-22" fill="none" stroke="#183034" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      {!compact && (
        <>
          <circle cx="62" cy="108" r="16" fill="#8be0c1" />
          <circle cx="346" cy="142" r="13" fill="#ffb8c6" />
          <path d="M63 205c16-26 52-26 68 0" fill="none" stroke="#ffd35a" strokeWidth="12" strokeLinecap="round" />
          <path d="M310 252c13-18 39-18 52 0" fill="none" stroke="#8be0c1" strokeWidth="10" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

export default ToiletIllustration
