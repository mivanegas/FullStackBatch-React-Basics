import "./App.css";
// import Wrapper from "./components/Wrapper";
// import Animals from "./components/Animals";
// import Signin from "./components/Signin";
// import Product from "./components/Product";
// import AuthWrapper from "./components/AuthWrapper";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Electronics from "./components/Electronics";
import Fashion from "./components/Fashion";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Landing</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/categories" element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>

        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>

    // <>
    //   {/* <Wrapper>
    //     <Animals />
    //   </Wrapper>

    //   <Animals />
    //   <Animals /> */}

    //   {/* <Signin /> */}

    //   {/* <AuthWrapper>
    //     <Product />
    //   </AuthWrapper> */}
    // </>
  );
}

export default App;

/*
  # Wrapper component: Component that surrounds/wraps another component to give extra features, styles, etc.

  # React Router:
    - React does not have inbuilt support for routing
    - To integrate router in react application, we can use a third-party package 'react-router-dom'

    - Components:
      - BrowserRouter: Wrapper component in react-router which has access to browser routing
      - Routes & Route: Switch case to determine which component to show on which path
        - Routes: Wrapper for collection of Route components
        - Route: Component which has 2 props
          - path*: Path (Eg.: / (root route), /about, /contact, /home, etc.)
          - element*: Component
          - index (optional): Alternative of path='/' (root route)
      - Link: Alternative of anchor tag in html, but it does not make the page reload
        - to: similar to 'href' attribute of anchor tag

    - More components:
      - Outlet: Placeholder for the component to be shown for the current path in the parent route component

    - Dynamic Segments (Dynamic Parameters):
      - If a path segment starts with : then it becomes a "dynamic segment"
      - Syntax
        - /testpath/:id
          - This will show the component for all the paths that follow the syntax. Examples: /testpath/test, /testpath/xyz, /testpath/abc, ...
      - The value of dynamic segment (param) can be accessed using "useParams" hook from react-router package
        - Syntax: const { param1 } = useParams()


    - Resources: https://reactrouter.com/start/declarative/installation
*/
