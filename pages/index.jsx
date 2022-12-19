//Styles
import utilStyles from "../styles/utils.module.css"
//Components
import LayoutComponent, { tittlePage } from "../components/layoutComponent"
import Head from "next/head"

import { useState } from "react"
import Link from "next/link"

const defaulTitle = "Página de prueba"

function Header({ title = "" }) {
  return <h1>{title ? title : defaulTitle}</h1>
}

export default function HomePage() {
  return (
    <LayoutComponent home>
      <Head>
        <title>{tittlePage}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola mundo desde NextJS</p>
        <p>
          (Un ejemplo de un sitio hecho con{" "}
          <a href="https://nextjs.org/">Next</a>.)
        </p>
      </section>
    </LayoutComponent>
  )
}
