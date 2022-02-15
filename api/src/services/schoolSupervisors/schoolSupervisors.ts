import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const schoolSupervisors = () => {
  return db.schoolSupervisor.findMany()
}

export const schoolSupervisor = ({
  id,
}: Prisma.SchoolSupervisorWhereUniqueInput) => {
  return db.schoolSupervisor.findUnique({
    where: { id },
  })
}

interface CreateSchoolSupervisorArgs {
  input: Prisma.SchoolSupervisorCreateInput
}

export const createSchoolSupervisor = ({
  input,
}: CreateSchoolSupervisorArgs) => {
  return db.schoolSupervisor.create({
    data: input,
  })
}

interface UpdateSchoolSupervisorArgs
  extends Prisma.SchoolSupervisorWhereUniqueInput {
  input: Prisma.SchoolSupervisorUpdateInput
}

export const updateSchoolSupervisor = ({
  id,
  input,
}: UpdateSchoolSupervisorArgs) => {
  return db.schoolSupervisor.update({
    data: input,
    where: { id },
  })
}

export const deleteSchoolSupervisor = ({
  id,
}: Prisma.SchoolSupervisorWhereUniqueInput) => {
  return db.schoolSupervisor.delete({
    where: { id },
  })
}

export const SchoolSupervisor = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof schoolSupervisor>>) =>
    db.schoolSupervisor.findUnique({ where: { id: root.id } }).user(),
  logbookEntries: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof schoolSupervisor>>
  ) =>
    db.schoolSupervisor.findUnique({ where: { id: root.id } }).logbookEntries(),
}
