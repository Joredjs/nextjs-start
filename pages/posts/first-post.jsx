import Link from "next/link"

export default function firstPosts() {
  return (
    <>
      <h1>Primer post</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
    </>
  )
}
