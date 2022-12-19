//Imports
//Styles
import styles from "./layoutComponent.module.css"
import utilStyles from "../styles/utils.module.css"
//Components
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const descriptionPage = "Aprendiendo NextJS"
const tittlePage = "Ejemplo con Nextjs"
const nombre = "Prueba"

export default function LayoutComponent(props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content={descriptionPage}></meta>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            tittlePage
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={tittlePage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {props.home ? (
          <>
            <Image
              src="/images/foto.webp"
              alt="Foto"
              width="144"
              height="144"
              className={utilStyles.borderCircle}
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{nombre}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/foto.webp"
                alt="Foto inicial"
                height="100"
                width="100"
              ></Image>

              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {nombre}
                </Link>
              </h2>
            </Link>
          </>
        )}
      </header>
      <main>{props.children}</main>
      {!props.home && (
        <div className={styles.backToHome}>
          <Link href="/">Volver al inicio</Link>
        </div>
      )}
    </div>
  )
}
