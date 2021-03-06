import { Link, navigate, routes, useLocation } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import { setRole, RoutesAndRoles } from 'src/lib/rolesAndRoutes'
import { Role } from 'types/graphql'

const SignupPage = () => {
  const { isAuthenticated, signUp, hasRole, logOut } = useAuth()
  const { search } = useLocation()
  const redirectTo = new URLSearchParams(search).get('redirectTo')
  const role: Role = setRole(redirectTo)

  useEffect(() => {
    if (isAuthenticated) {
      {
        // if (hasRole(RoutesAndRoles[redirectTo])) {
        //   navigate(redirectTo)
        // } else {
        //   toast.error(
        //     'You do not have permission to access this page.Redirecting you to login...'
        //   )
        //   //logOut()
        // }
        navigate(redirectTo)
      }
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    console.log(`signup recryitwr ${role}`)
    const response = await signUp({ ...data, role })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      if (hasRole(RoutesAndRoles[redirectTo])) {
        toast.success('Welcome!')
      } //else {
      //   toast.error(
      //     'You do not have permission to access this page.Redirecting you to login...'
      //   )
      //   logOut()
      // }
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <h6 className="capitalize font-semibold mx-auto text-center mt-16">
          {redirectTo == null || redirectTo == undefined
            ? ''
            : redirectTo.replace('-', ' ').replace('/', '')}
          Sign Up
        </h6>
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />
                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
