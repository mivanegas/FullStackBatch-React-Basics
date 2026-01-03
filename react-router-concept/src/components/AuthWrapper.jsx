import Signin from "./Signin";

function AuthWrapper(props) {
  let isLoggedIn = true;
  if (!isLoggedIn) {
    return <Signin />;
  }

  return props.children;
}

export default AuthWrapper;
