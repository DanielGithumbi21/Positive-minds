import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

export default function EditProfile() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form data
    let formErrors = {};
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.age) formErrors.age = 'Age is required';
    if (!formData.gender) formErrors.gender = 'Gender is required';

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      // send data to the server to update the user's profile
    }
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            invalid={errors.username}
          />
          {errors.username && <Alert color="danger">{errors.username}</Alert>}
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            invalid={errors.email}
          />
          {errors.email && <Alert color="danger">{errors.email}</Alert>}
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            invalid={errors.age}
          />
          {errors.age && <Alert color="danger">{errors.age}</Alert>}
        </FormGroup>

        <FormGroup>
          <Label for="gender">Gender</Label>
          <Input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            invalid={errors.gender}
          />
          {errors.gender && <Alert color="danger">{errors.gender}</Alert>}
        </FormGroup>

        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
}
