import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const logbookEntries = () => {
  return db.logbookEntry.findMany()
}

export const logbookEntry = ({ id }: Prisma.LogbookEntryWhereUniqueInput) => {
  return db.logbookEntry.findUnique({
    where: { id },
  })
}

interface CreateLogbookEntryArgs {
  input: Prisma.LogbookEntryCreateInput
}

export const createLogbookEntry = ({ input }: CreateLogbookEntryArgs) => {
  return db.logbookEntry.create({
    data: input,
  })
}

interface UpdateLogbookEntryArgs extends Prisma.LogbookEntryWhereUniqueInput {
  input: Prisma.LogbookEntryUpdateInput
}

export const updateLogbookEntry = ({ id, input }: UpdateLogbookEntryArgs) => {
  return db.logbookEntry.update({
    data: input,
    where: { id },
  })
}

export const deleteLogbookEntry = ({
  id,
}: Prisma.LogbookEntryWhereUniqueInput) => {
  return db.logbookEntry.delete({
    where: { id },
  })
}

export const LogbookEntry = {
  student: (_obj, { root }: ResolverArgs<ReturnType<typeof logbookEntry>>) =>
    db.logbookEntry.findUnique({ where: { id: root.id } }).student(),
  industrySupervisor: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof logbookEntry>>
  ) =>
    db.logbookEntry.findUnique({ where: { id: root.id } }).industrySupervisor(),
  schoolSupervisor: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof logbookEntry>>
  ) =>
    db.logbookEntry.findUnique({ where: { id: root.id } }).schoolSupervisor(),
}
