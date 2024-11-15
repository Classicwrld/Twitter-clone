import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/auth/users/sign-up" element={<SignUp />} />
              <Route path="/auth/users/sign-in" element={<SignIn />} />
              <Route element={<RequireAuth/>}>

              </Route>
              <Route path="/users/notes" element={<Notes />} />
              <Route path="/users/notes/create-note" element={<CreateNote />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer/>
      </>
    </div>
  )
}

export default App;