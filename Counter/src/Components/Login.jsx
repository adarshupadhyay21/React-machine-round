import React, { useState } from 'react';

function LoginForm() {
  // State for email and password
  const [formData, setFormData] = useState({ email: "", password: "" });
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Alert the entered email and password
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <div style={styles.container}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"} // Toggle password visibility
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.checkboxGroup}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label>Show Password</label>
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

// Basic styling
const styles = {
  container: {
    maxWidth: "500px",
    padding: "40px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  checkboxGroup: {
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LoginForm;

// function ItemList() {
//   const items = ["Apple", "Banana", "Cherry",];

//   return (
//     <>
//       {items.map((item , index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </>
//   );
// }

// export default ItemList;