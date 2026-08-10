# Personal Portfolio — Full-Stack Web Application

A modern full-stack developer portfolio built with **React, TypeScript, Spring Boot, PostgreSQL, and Resend**.

The portfolio showcases my technical skills, projects, professional experience, and provides a fully functional contact system that allows visitors to send messages directly from the website.

---

## Live Application

### Frontend

[View Live Portfolio](https://my-portfolio-kohl-delta-20.vercel.app)

### Backend API

[View Backend API](https://my-portfolio-backend-lxkw.onrender.com)

---

## Features

### Portfolio

- Responsive personal portfolio
- Hero section
- About section
- Technical skills
- Professional experience
- Project showcase
- Contact section
- Social media links
- Responsive mobile design

### Contact System

The portfolio includes a fully functional contact form.

Visitors can submit:

- Full Name
- Email Address
- Subject
- Message

The submission is sent to the Spring Boot backend where it is:

1. Validated using Jakarta Bean Validation
2. Persisted in PostgreSQL
3. Sent to my inbox using the Resend Email API
4. Configured with the sender's email as the `Reply-To` address

This allows me to reply directly to the person who submitted the message from my email client.

### Contact Flow

```text
Visitor
   │
   ▼
React Contact Form
   │
   │ POST /api/contact
   ▼
Spring Boot REST API
   │
   ├──────────────► PostgreSQL
   │                 │
   │                 └── Stores contact message
   │
   ▼
Resend Email API
   │
   ▼
Personal Inbox
   │
   ▼
Reply to Sender
