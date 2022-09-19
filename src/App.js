import "../src/styles/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
function App() {
  return (
    <Layout>
      <Login />
      <br />
      <br />
      <br />
      <br />

      <Signup />
      <Home />
    </Layout>
  );
}

export default App;
