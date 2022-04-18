import { Box, Button } from '@mui/material'
import { Router, Route, Link } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const PageHeader = ({ children }) => {
  const { logOut } = useAuth()
  return (
    <Box
      sx={{
        background: 'url("/img/headerBg.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <Button onClick={logOut} sx={{ position: 'absolute', top: 0, right: 0 }}>
        LOG OUT
      </Button>
      <div className="w-full h-full bg-black/50 py-16 px-10">
        <div className="flex items-center justify-around text-white">
          <Link
            to="/student-profile"
            className="hover:text-green-600 focus:text-green-500 active:text-green-500"
          >
            Students
          </Link>
          <Link to="/recruiter">Recruiters</Link>
          <Link to="/school-supervisor">School Supervisor</Link>
          <Link to="/">opportunities</Link>
        </div>
        <div className="content mt-10">{children}</div>
      </div>
    </Box>
  )
}

export default PageHeader
