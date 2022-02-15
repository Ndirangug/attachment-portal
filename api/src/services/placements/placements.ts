import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const placements = () => {
  return db.placement.findMany()
}

export const placement = ({ id }: Prisma.PlacementWhereUniqueInput) => {
  return db.placement.findUnique({
    where: { id },
  })
}

interface CreatePlacementArgs {
  input: Prisma.PlacementCreateInput
}

export const createPlacement = ({ input }: CreatePlacementArgs) => {
  return db.placement.create({
    data: input,
  })
}

interface UpdatePlacementArgs extends Prisma.PlacementWhereUniqueInput {
  input: Prisma.PlacementUpdateInput
}

export const updatePlacement = ({ id, input }: UpdatePlacementArgs) => {
  return db.placement.update({
    data: input,
    where: { id },
  })
}

export const deletePlacement = ({ id }: Prisma.PlacementWhereUniqueInput) => {
  return db.placement.delete({
    where: { id },
  })
}

export const Placement = {
  application: (_obj, { root }: ResolverArgs<ReturnType<typeof placement>>) =>
    db.placement.findUnique({ where: { id: root.id } }).application(),
}
