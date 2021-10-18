import type { NextApiRequest, NextApiResponse } from 'next'
import faker from 'faker'
import { User } from '../../types/types'

type Data = {
  users: User[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await new Promise((res) => setTimeout(res, 1000))
  const users = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    company: faker.company.companyName(),
    catchPhrase: faker.company.catchPhrase(),
  }))

  res.json({
    users,
  })
}
