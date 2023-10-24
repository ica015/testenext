import Link from 'next/link'
import styles from './sobre.module.css'

export default function Sobre() {
  return (

    <div>
      <h1 className={styles.margem}>Sobre Nós</h1>
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
