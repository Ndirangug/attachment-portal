import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const students = () => {
  return db.student.findMany()
}

export const student = ({ id }: Prisma.StudentWhereUniqueInput) => {
  return db.student.findUnique({
    where: { id },
  })
}

interface CreateStudentArgs {
  student: Prisma.StudentCreateInput
  userId: string
}

export const createStudent = ({ student, userId }: CreateStudentArgs) => {
  return db.user.update({
    where: {
      id: userId,
    },
    data: {
      student: {
        create: student,
      },
    },
  })
}

interface UpdateStudentArgs extends Prisma.StudentWhereUniqueInput {
  input: Prisma.StudentUpdateInput
}

export const updateStudent = ({ id, input }: UpdateStudentArgs) => {
  return db.student.update({
    data: input,
    where: { id },
  })
}

export const deleteStudent = ({ id }: Prisma.StudentWhereUniqueInput) => {
  return db.student.delete({
    where: { id },
  })
}

export const Student = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof student>>) =>
    db.student.findUnique({ where: { id: root.id } }).user(),
  applications: (_obj, { root }: ResolverArgs<ReturnType<typeof student>>) =>
    db.student.findUnique({ where: { id: root.id } }).applications(),
  logbookEntries: (_obj, { root }: ResolverArgs<ReturnType<typeof student>>) =>
    db.student.findUnique({ where: { id: root.id } }).logbookEntries(),
}
