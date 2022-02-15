import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ApplicationCreateArgs>({
  application: {
    one: {
      data: {
        student: {
          create: {
            firstName: 'String',
            lastName: 'String',
            course: 'String',
            aboutMe: 'String',
            skills: 'String',
            experience: { foo: 'bar' },
            education: { foo: 'bar' },
            user: {
              create: {
                email: 'String1033006',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        opportunity: {
          create: {
            title: 'String',
            compnsation: 1166519,
            jobDescription: 'String',
            requirements: 'String',
            details: { foo: 'bar' },
            location: 'String',
            skillsRequired: 'String',
            skillsPrefferred: 'String',
            industry: 'String',
            company: {
              create: {
                name: 'String',
                bio: 'String',
                industry: 'String',
                photo: 'String',
                location: 'String',
                user: {
                  create: {
                    email: 'String940937',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        student: {
          create: {
            firstName: 'String',
            lastName: 'String',
            course: 'String',
            aboutMe: 'String',
            skills: 'String',
            experience: { foo: 'bar' },
            education: { foo: 'bar' },
            user: {
              create: {
                email: 'String5588303',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        opportunity: {
          create: {
            title: 'String',
            compnsation: 5771881,
            jobDescription: 'String',
            requirements: 'String',
            details: { foo: 'bar' },
            location: 'String',
            skillsRequired: 'String',
            skillsPrefferred: 'String',
            industry: 'String',
            company: {
              create: {
                name: 'String',
                bio: 'String',
                industry: 'String',
                photo: 'String',
                location: 'String',
                user: {
                  create: {
                    email: 'String2715648',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
