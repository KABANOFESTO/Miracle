import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import BlogSingle from "./pages/BlogSingle";
import Notfound from "./pages/404-Page";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="signup" element={<Signup />} />
          <Route path="blogSingle/:id" element={<BlogSingle />} />
          <Route path="*" element={<Notfound />} />
        </Route>
        
      </Routes>
    </>
  );
}
export default App;
