import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const companies = () => {
  return db.company.findMany()
}

export const company = ({ id }: Prisma.CompanyWhereUniqueInput) => {
  return db.company.findUnique({
    where: { id },
  })
}

interface CreateCompanyArgs {
  company: Prisma.CompanyCreateInput
  userId: string
}

export const createCompany = ({ company, userId }: CreateCompanyArgs) => {
  return db.user.update({
    where: {
      id: userId,
    },
    data: {
      company: {
        create: company,
      },
    },
  })
}

interface UpdateCompanyArgs extends Prisma.CompanyWhereUniqueInput {
  input: Prisma.CompanyUpdateInput
}

export const updateCompany = ({ id, input }: UpdateCompanyArgs) => {
  return db.company.update({
    data: input,
    where: { id },
  })
}

export const deleteCompany = ({ id }: Prisma.CompanyWhereUniqueInput) => {
  return db.company.delete({
    where: { id },
  })
}

export const Company = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof company>>) =>
    db.company.findUnique({ where: { id: root.id } }).user(),
  industrySupervisors: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof company>>
  ) => db.company.findUnique({ where: { id: root.id } }).industrySupervisors(),
  opportunities: (_obj, { root }: ResolverArgs<ReturnType<typeof company>>) =>
    db.company.findUnique({ where: { id: root.id } }).opportunities(),
}
