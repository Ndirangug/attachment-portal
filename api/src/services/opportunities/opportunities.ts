import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const opportunities = () => {
  return db.opportunity.findMany()
}

export const opportunity = ({ id }: Prisma.OpportunityWhereUniqueInput) => {
  return db.opportunity.findUnique({
    where: { id },
  })
}

interface CreateOpportunityArgs {
  opportunity: Prisma.OpportunityCreateInput
  companyId: string
}

export const createOpportunity = ({
  opportunity,
  companyId,
}: CreateOpportunityArgs) => {
  // const result =  db.company.update({
  //   where: {
  //     id: companyId,
  //   },
  //   data: {
  //     opportunities: {
  //       create: [opportunity],
  //     },
  //   },
  // })

  // //console.log(result)
  // console.log(result.opportunities)

  // return result.opportunities
  return db.opportunity.create({
    data: {
      ...opportunity,
      company: {
        connect: { id: companyId },
      },
    },
  })
}

interface UpdateOpportunityArgs extends Prisma.OpportunityWhereUniqueInput {
  input: Prisma.OpportunityUpdateInput
}

export const updateOpportunity = ({ id, input }: UpdateOpportunityArgs) => {
  return db.opportunity.update({
    data: input,
    where: { id },
  })
}

export const deleteOpportunity = ({
  id,
}: Prisma.OpportunityWhereUniqueInput) => {
  return db.opportunity.delete({
    where: { id },
  })
}

export const Opportunity = {
  company: (_obj, { root }: ResolverArgs<ReturnType<typeof opportunity>>) =>
    db.opportunity.findUnique({ where: { id: root.id } }).company(),
  applications: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof opportunity>>
  ) => db.opportunity.findUnique({ where: { id: root.id } }).applications(),
}
