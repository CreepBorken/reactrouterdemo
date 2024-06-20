import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import ProfilePage from "./ProfilePage";
import NotFoundPage from "./NotFoundPage";
import BlogPost from "./BlogPost";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import { AuthProvider, AuthRoute } from "./auth";

/*

  Como Funcionaria mi sitio dependiendo a la URL 

  /#/        -> HomePage
  /#/profile -> ProfilePage
  /#/blog    -> BlogPage
  /#/hola    -> HomePage
  /blog      -> HomePage
  /profile   -> HomePage
*/

function App() {
  return (
    <>
      <HashRouter>
        {/* Se Recomienda amplicamente colocar este componente dentro del HashRouter para con el AuthProvider utilizar los metdos del hashRouter y navegar*/}
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />}></Route>
            </Route>
            <Route path="/login" element={<LoginPage />}></Route>

            {/* 
              Antes de Mostrar el element vamos a AuthRoute, quien valida si hay sesion iniciada o no.
              Esto se ejectua en el orden en el que se ven los componentes.
            */}
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            ></Route>
            {/* Not Found con Asterisco va simepre al final, indica que todo aquel URL que no hayamos definido preste el componente <NotFoundPage/> */}
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
