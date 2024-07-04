import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./views/Menu";
import HomePage from "./views/HomePage";
import BlogPage from "./views/BlogPage";
import ProfilePage from "./views/ProfilePage";
import NotFoundPage from "./views/NotFoundPage";
import BlogPost from "./views/BlogPost";
import LoginPage from "./views/LoginPage";
import LogoutPage from "./views/LogoutPage";
import { AuthProvider, AuthRoute } from "./utils/auth";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Footer from "./views/Footer";
import EventsPage from "./views/EventsPage";

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
              <Route path="/blog" element={<BlogPage />}></Route>
              <Route path="/blog/:slug" element={<BlogPost />}></Route>
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
                path="/events"
                element={
                  <AuthRoute>
                    <EventsPage />
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
            <Footer />        
        </AuthProvider>
      </HashRouter>    
      </>
  );
}

export default App;
