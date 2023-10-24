import Link from 'next/link'

export default function Sobre() {
  return (

    <div>
      <h1>Sobre Nós</h1>
      <br />
      <Link href={'/'}>
        <i>Página Inicial</i> 
      </Link>
      <div>
        <p>aqui vamos contar um pouco de nossa história</p>
      </div>
    </div>
  )
}
