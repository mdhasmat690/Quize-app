import classes from "../../styles/Signup.module.css"; /////////style
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form"; ///
import Illustration from "../Illustration"; //
import SignupForm from "../SignupForm";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
