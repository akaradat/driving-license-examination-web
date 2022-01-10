import { useRouter } from 'next/router'

const Examination: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <main>
      <h2>{id}</h2>
    </main>
  )
}

export default Examination
