import { Container } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import UserPage from './pages/userPage'
import "./index.css"
import PostPage from './pages/PostPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import { SettingsPage } from './pages/SettingsPage'
import UpdateProfilePage from './pages/UpdateProfilePage'
import { Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'


import { useRecoilValue } from 'recoil'
import userAtom from './atoms/userAtom'

import CreatePost from './components/CreatePost'
import ChatPage from './pages/ChatPage'

function App() {

  const user = useRecoilValue(userAtom)
  const { pathname } = useLocation();

  return (
    <Box w='full' position={'relative'}>
      <Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
        <Header />
        <Routes>
          <Route path='/' element={user ? <HomePage /> : <Navigate to="/auth" />} />
          <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to="/" />} />
          <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />} />

          <Route
            path='/:username'
            element={
              user ? (
                <>
                  <UserPage />
                  <CreatePost />
                </>
              ) : (
                <UserPage />
              )
            }
          />
          <Route path='/:username/post/:pid' element={<PostPage />} />
          <Route path='/chat' element={user ? <ChatPage /> : <Navigate to={'/auth'} />} />
          <Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />

        </Routes>

      </Container>
    </Box>
  )
}

export default App
