"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main id="main" className="content-page"><h1>Something went wrong</h1><p>Please try again.</p><button type="button" onClick={reset}>Retry</button></main>;
}
