import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [fruit, SetFruit] = useState("");

  function handleInput(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSelect(e) {
    SetFruit(e.target.value);
  }

  return (
    <div>
      <form>
        <div className="form-input">
          <label htmlFor="fname">
            <h2>
              Your Name is {formData.firstName} {formData.lastName}, and your
              email address is {formData.email}
            </h2>
          </label>
          <br />

          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleInput}
          />

          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleInput}
          />
          <input type="text" name="email" id="email" onChange={handleInput} />

          <h1>Your Current Fruit Selection is {fruit}</h1>

          <select
            name="fruits"
            id="fruits"
            value={fruit}
            onChange={handleSelect}
          >
            <option value="">Select Fruit</option>
            <option value="apple">Apple</option>
            <option value="mango">Mango</option>
            <option value="orange">Orange</option>
            <option value="pineapple">Pineapple</option>
          </select>
        </div>
      </form>
    </div>
  );
}
