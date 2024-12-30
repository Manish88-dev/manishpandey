import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.contact_name || !formData.contact_email || !formData.contact_address || !formData.contact_phone) {
            setNotDone(true);
        } else {
            emailjs
                .sendForm(
                    "service_niilndo", // Replace with your Service ID
                    "template_79skf6e", // Replace with your Template ID
                    form.current,
                    "VOBt6Akm1LhI5CZG-" // Replace with your Public Key
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="contact_name"
                            className="user"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="contact_email"
                            className="user"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="contact_address"
                            className="user"
                            placeholder="Address"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="contact_phone"
                            className="user"
                            placeholder="Phone"
                            onChange={handleChange}
                        />
                        <span className='not-done'>
                            {notDone && "Please, fill all the input fields"}
                        </span>
                        <Button type="submit" className="button" disabled={done}>
                            Send
                        </Button>
                        <span className='done'>
                            {done && "Thanks for contacting me! Your message has been sent."}
                        </span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
