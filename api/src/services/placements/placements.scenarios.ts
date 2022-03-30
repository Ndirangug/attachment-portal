import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PlacementCreateArgs>({
  placement: {
    one: {
      data: {
        application: {
          create: {
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
                    email: 'String5575011',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            opportunity: {
              create: {
                title: 'String',
                compensation: 5821241,
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
                        email: 'String9125483',
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
    },
    two: {
      data: {
        application: {
          create: {
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
                    email: 'String7946344',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            opportunity: {
              create: {
                title: 'String',
                compensation: 6910727,
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
                        email: 'String4185864',
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
    },
  },
})

export type StandardScenario = typeof standard
