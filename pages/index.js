import { Button } from 'antd'
import Link from 'next/link'
import styles from './styles/index.module.css'

const Home = (props) => {
  return (
    <div className={styles.page}>
      <h1 className="mb-5">
        Next 9.3+ with AntD 4+ with Built-in-CSS and modules
      </h1>
      <Link href="/signin">
        <Button>Sign In</Button>
      </Link>
    </div>
  )
}

export default Home
