import type { NextPage } from 'next'
import useSWR, { useSWRConfig } from 'swr'
import { User } from '../types/types'
import type { AxiosError, AxiosResponse } from 'axios'

const Home: NextPage = () => {
  const { data, isValidating, mutate, error } = useSWR<
    AxiosResponse<{ users: User[] }>,
    AxiosError
  >('/api/user1')

  if (error) return <h1>Error</h1>
  if (!data) return <h1>Loading...</h1>
  console.log(data.data)

  return (
    <div>
      {data.data.users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Home
