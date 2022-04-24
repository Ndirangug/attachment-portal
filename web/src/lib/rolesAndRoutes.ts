import type { Role } from '@prisma/client'

export const setRole = (redirectTo): Role => {
  switch (redirectTo) {
    case '/student-profile':
      return 'STUDENT'
      break
    case '/industry-supervisor':
      return 'INDUSTRY_SUPERVISOR'
      break
    case '/school-supervisor':
      return 'SCHOOL_SUPERVISOR'
    case '/recruiter':
      return 'INDUSTRY_SUPERVISOR'
      break
    default:
      return 'STUDENT'
      break
  }
}

export enum RoutesAndRoles {
  '/student-profile' = 'STUDENT',
  '/industry-supervisor' = 'INDUSTRY_SUPERVISOR',
  '/school-supervisor' = 'SCHOOL_SUPERVISOR',
  '/recruiter' = 'RECRUITER',
}
