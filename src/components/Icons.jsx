export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      )}
    </svg>
  )
}

export function Star({ className = '', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="m50 0 8 31 26-20-14 30 30 9-30 9 14 30-26-20-8 31-8-31-26 20 14-30L0 50l30-9-14-30 26 20z" />
    </svg>
  )
}

export function GitHub() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7A5.5 5.5 0 0 0 19.2 4 5 5 0 0 0 19 .2S17.7-.2 15 1.7a14 14 0 0 0-6 0C6.3-.2 5 .2 5 .2A5 5 0 0 0 4.8 4a5.5 5.5 0 0 0-1.5 4.3c0 5.4 3.4 6.6 6.7 7A3.5 3.5 0 0 0 9 18v4"
        transform="translate(0 1) scale(.92)"
      />
    </svg>
  )
}

export function Pin() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
