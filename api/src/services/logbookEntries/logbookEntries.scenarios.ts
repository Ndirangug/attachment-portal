import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LogbookEntryCreateArgs>({
  logbookEntry: {
    one: {
      data: {
        studentComments: 'String',
        schoolSupervisorComments: 'String',
        industrySupervisorComments: 'String',
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
                email: 'String6217373',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        industrySupervisor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            user: {
              create: {
                email: 'String1301632',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            company: {
              create: {
                name: 'String',
                bio: 'String',
                industry: 'String',
                photo: 'String',
                location: 'String',
                user: {
                  create: {
                    email: 'String7559683',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
        schoolSupervisor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            user: {
              create: {
                email: 'String4289958',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        studentComments: 'String',
        schoolSupervisorComments: 'String',
        industrySupervisorComments: 'String',
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
                email: 'String9527035',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        industrySupervisor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            user: {
              create: {
                email: 'String1162668',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            company: {
              create: {
                name: 'String',
                bio: 'String',
                industry: 'String',
                photo: 'String',
                location: 'String',
                user: {
                  create: {
                    email: 'String6442435',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
        schoolSupervisor: {
          create: {
            firstName: 'String',
            lastName: 'String',
            user: {
              create: {
                email: 'String5456204',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
