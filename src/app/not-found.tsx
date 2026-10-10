import Link from "next/link";
export default function NotFound() {
  return <main id="main" className="content-page"><h1>Page not found</h1><p>The page or project could not be found.</p><Link href="/">Return home</Link></main>;
}
