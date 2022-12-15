import { useState } from "react"
import Link from "next/link"

function Header({ title }) {
  const defaulTitle = "Página de prueba"

  return <h1>{title ? title : defaulTitle}</h1>
}

export default function HomePage() {
  const names = ["Página", "Prueba", "de", "asd", "asddasd"]
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="Starting with next" />
      <ul>
        {names.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like {likes}</button>
      <Link href="/posts/first-post">
				<button>Primer post</button>
			</Link>
    </div>
  )
}
