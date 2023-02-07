import { Linkedin, Github } from 'react-bootstrap-icons'
import { Form, Button } from 'react-bootstrap'
import React from 'react';
import './Contact.scss'

function Contact() {
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    query: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your message. Your query has been forwarded.`);
    const templateId = 'template_ldfq9ma';
    const serviceID = "service_52it05e";
    sendFeedback(serviceID, templateId, { from_name: formData.name, message_html: formData.query, email: formData.email })

    console.log(formData);
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs.send(
      serviceID, templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      .catch(err => console.error('There has been an Error.', err))
  }

  return (
    <main class="Contactmain">
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-white">Socials</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 text-white">Get in touch with me via a linkedin message or the email contact form below, I will get back to you as soon as possible. Thanks and please see my github to stay up to date on my latest projects.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="https://www.linkedin.com/in/adchirita/" target="_blank" class="btn btn-outline-light btn-lg px-4" role="button">Linked<Linkedin class="mb-1" size="25" /></a>
            <a href="https://github.com/Pitching" target="_blank" role="button" class="btn btn-outline-light btn-lg px-4">Github <Github class="mb-1" size="25" /></a>
          </div>
        </div>
      </div>
      <div class="container w-50">
        <Form>
          <Form.Group controlId="formGridName">
            <Form.Label className="text-white">Name</Form.Label>
            <Form.Control onChange={handleChange} className=" text-white border border-3 bg-transparent" name="name" type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formGridEmail">
            <Form.Label className="text-white pt-3">Email</Form.Label>
            <Form.Control onChange={handleChange} className="text-white border border-3 bg-transparent" name="email" type="email" placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group id="formGridQuery">
            <Form.Label className="text-white pt-3">Message</Form.Label>
            <Form.Control onChange={handleChange} className="text-white border border-3 bg-transparent" name="query" as="textarea" rows={3} />
          </Form.Group>
          <div class="text-center">
            <Button onClick={handleSubmit} className="mt-3" variant="outline-light" size="lg" type="submit">
              Submit
            </Button>
          </div>
        </Form >
      </div>
    </main>
  )
}

export default Contact;