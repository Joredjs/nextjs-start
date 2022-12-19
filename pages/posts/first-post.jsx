import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layoutComponent"

export default function firstPosts() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      ></Script>
      <h1>Primer post</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
    </>
  )
}
