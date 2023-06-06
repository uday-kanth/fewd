import React, { useState } from 'react';


function Assignment7() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmissions([...formSubmissions, formData]);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
		<br></br>
		<br></br>
        <label>
			
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
		<br></br>
		<br></br>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
		<br></br>
		<br></br>
        <button type="submit">Submit</button>
      </form>
      <hr />
	  <br></br>
      <table>
        <thead>
          <tr>
            <th>Name   </th>
            <th>Email   </th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {formSubmissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assignment7;