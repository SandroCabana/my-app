import Link from "next/link"
import Head from "next/head"

export default function Layout({title, children}) {
  return (
    <div>
      <Head>
        <title >{title? title+"-Apselom":"Apselom"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}
