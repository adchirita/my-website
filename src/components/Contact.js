import { Linkedin, Github } from 'react-bootstrap-icons'
import { Form, Col, Button } from 'react-bootstrap'
import './Contact.scss'

function Contact() {
  return (
    <main>
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
            <Form.Control className="border border-3 bg-transparent" name="name" type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formGridEmail">
            <Form.Label className="text-white pt-3">Email</Form.Label>
            <Form.Control className="border border-3 bg-transparent" name="email" type="email" placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group id="formGridQuery">
            <Form.Label className="text-white pt-3">Message</Form.Label>
            <Form.Control className="border border-3 bg-transparent" name="query" as="textarea" rows={3} />
          </Form.Group>
          <div class="text-center">
            <Button className="mt-3" variant="outline-light" size="lg" type="submit">
              Submit
            </Button>
          </div>
        </Form >
      </div>
    </main>
  )
}

export default Contact;