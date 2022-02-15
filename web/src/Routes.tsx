// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/school-supervisor" page={SchoolSupervisorPage} name="schoolSupervisor" />
      <Route path="/industry-supervisor" page={IndustrySupervisorPage} name="industrySupervisor" />
      <Route path="/recruiter" page={RecruiterPage} name="recruiter" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/opportunities" page={OpportunitiesPage} name="opportunities" />
      <Route path="/student-profile" page={StudentProfilePage} name="studentProfile" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
