import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Página inicial</h1>
      <br />
      <Link href={'/sobre'}>
      <i>Sobre</i>
      </Link>
    </div>
  )
}
