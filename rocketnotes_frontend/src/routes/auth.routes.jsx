import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  // tem que usar o localStorage porque ainda não tem usuário neste momento
  const user = localStorage.getItem("@rocketnotes:user");

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

        {/* se o usuário não existir */}
      { !user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )
}