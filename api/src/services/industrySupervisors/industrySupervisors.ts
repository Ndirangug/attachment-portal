import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const industrySupervisors = () => {
  return db.industrySupervisor.findMany()
}

export const industrySupervisor = ({
  id,
}: Prisma.IndustrySupervisorWhereUniqueInput) => {
  return db.industrySupervisor.findUnique({
    where: { id },
  })
}

interface CreateIndustrySupervisorArgs {
  input: Prisma.IndustrySupervisorCreateInput
}

export const createIndustrySupervisor = ({
  input,
}: CreateIndustrySupervisorArgs) => {
  return db.industrySupervisor.create({
    data: input,
  })
}

interface UpdateIndustrySupervisorArgs
  extends Prisma.IndustrySupervisorWhereUniqueInput {
  input: Prisma.IndustrySupervisorUpdateInput
}

export const updateIndustrySupervisor = ({
  id,
  input,
}: UpdateIndustrySupervisorArgs) => {
  return db.industrySupervisor.update({
    data: input,
    where: { id },
  })
}

export const deleteIndustrySupervisor = ({
  id,
}: Prisma.IndustrySupervisorWhereUniqueInput) => {
  return db.industrySupervisor.delete({
    where: { id },
  })
}

export const IndustrySupervisor = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof industrySupervisor>>) =>
    db.industrySupervisor.findUnique({ where: { id: root.id } }).user(),
  company: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof industrySupervisor>>
  ) => db.industrySupervisor.findUnique({ where: { id: root.id } }).company(),
  logbookEntries: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof industrySupervisor>>
  ) =>
    db.industrySupervisor
      .findUnique({ where: { id: root.id } })
      .logbookEntries(),
}
