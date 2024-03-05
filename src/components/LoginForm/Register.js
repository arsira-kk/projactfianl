import { useState } from "react";
import ReactDOM from "react-dom/client";

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="Email"
            value={inputs.Email || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="Password"
            name="Password"
            value={inputs.Password || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="Password"
            name="Password"
            value={inputs.Password || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Tel:
          <input
            type="number"
            name="Tel"
            value={inputs.Tel || ""}
            onChange={handleChange}
          />
        </label>
        
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
