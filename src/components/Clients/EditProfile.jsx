import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { updateProfile } from '../../Data/users/users'
// import { getSessions } from '../../Data/users/counsellors';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditProfile() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        age: '',
        gender: '',
    });
    const [errors, setErrors] = useState({});
    const userId = sessionStorage.getItem("userId");


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getUserId = () => {
        const userId = localStorage.getItem('userId');
        return userId;
    }


    sessionStorage.setItem("userId", userId);



    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};
        if (!formData.username) formErrors.username = 'Username is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.age) formErrors.age = 'Age is required';
        if (!formData.gender) formErrors.gender = 'Gender is required';

        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            console.log(formData);
            const userId = localStorage.getItem('userId');
            updateProfile(userId, formData);
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

                <div className="d-flex justify-content-center">
                    <Button className="btn btn-primary text-center">Submit</Button>
                </div>
            </Form>
        </div>
    );
}
