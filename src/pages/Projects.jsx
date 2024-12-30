import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Metro Route Finder"
              description="MetroNearMe is a platform designed to help users find nearby metro stations and plan their journeys efficiently. It provides real-time information about station locations, routes, and timings, ensuring users can make informed travel decisions. With an easy-to-use interface, the platform allows users to search for stations based on their current location or a specified address. It also offers route planning, showing the fastest or most convenient paths between stations. The website integrates interactive maps for easy navigation and includes fare details for each journey. By using MetroNearMe users can streamline their commute and enhance their travel experience with accessible metro information."
              demoLink="https://metronearme.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Expense-Tracker"
              description="I developed an Expense Tracker application using React, leveraging useState to efficiently manage and update the list of expenses. The application features a simple user interface with a button to add expenses and a dynamically updating list to display them. I utilized React hooks and functional components to handle user interactions and ensure real-time updates of the expense data. The project highlights my ability to build interactive, responsive components with a focus on smooth user experience and effective state management."
              ghLink="https://github.com/Manish88-dev/Expense-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="Developed a car rental website using PHP to manage car bookings, customer details, and reservations. Integrated MySQL for efficient data storage, including car models, availability, customer information, and reservations. Implemented a booking system where users can view available cars, make reservations, and calculate rental costs based on duration. Designed responsive forms for customer sign-ups, logins, and reservation management. Built an admin panel for managing car inventory, processing reservations, and tracking payments. Incorporated payment gateway integration to handle online payments. Focused on building a user-friendly, functional, and secure platform for both customers and administrators."
              ghLink="https://github.com/Manish88-dev/car-rental-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="I developed a blog website using WordPress, focusing on creating engaging content and optimizing for search engines. The website's SEO strategies resulted in improving rankings, with some pages moving to the second page of Google search results. Through consistent content updates and quality blog posts, the site gained more organic traffic. As a result, the website's visibility improved, contributing to a noticeable increase in company growth and brand awareness. The use of effective plugins for SEO, performance, and user experience helped enhance the overall functionality of the website. The project demonstrated my skills in WordPress development and SEO optimization, leading to tangible business growth."
              demoLink="https://cricketcupworld.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Dynamic Contact Form"
              description="A dynamic contact form that fetches the user's IP address can provide valuable insights and significantly enhance user experience. By capturing the IP address, businesses can track the location and engagement patterns of visitors, enabling more personalized interactions and improving security. This article will guide you through creating a dynamic contact form using PHP and JavaScript, where the user's IP address is automatically captured and included in the form submission. The form will also validate user inputs, ensuring a seamless experience. Additionally, we will implement a method to send the form data, including the IP address, to an email or a database for further analysis. Follow along as we build a robust and user-friendly contact form that adds an extra layer of functionality to your website."
              ghLink="https://github.com/Manish88-dev/Dynamic-Contact-Form-With-IP-Address"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="PDF-Generating"
              description="Developed a PDF generation feature using PHP to create dynamic reports, invoices, and documents. Utilized the FPDF library for generating customizable PDFs with text, tables, and images. Implemented functionality to generate PDF files based on user inputs or database data, allowing for the creation of professional-looking documents in real time. The PDFs were designed to be responsive and customizable, with support for different fonts, styles, and page layouts. Integrated the PDF generation system with the existing application for automated report creation and easy document downloads. Focused on ensuring proper formatting, output, and efficient PDF rendering for a smooth user experience."
              ghLink="https://github.com/Manish88-dev/pdf-generating-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects