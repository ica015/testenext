import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Página inicial</h1>
      <br />
      <Link href={'/sobre'}>
      <i>Sobre</i>
      </Link>
      <p>Bem-Vindo(a) ao nossi site. Aqui você encontrará de tudo um pouco</p>
    </div>
  )
}
