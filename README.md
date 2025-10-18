# Event Booking & Management Platform

A fullstack event booking platform where users can browse, book, and manage tickets, and admins can oversee events, bookings, and analytics. Built with modern technologies and best practices in fullstack development.

---

## 🛠 Tech Stack

- **Frontend:** Next.js 13 (App Router), React, Tailwind CSS  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  
- **Authentication:** JWT + bcrypt (password hashing)  
- **State Management:** React Context  
- **Notifications:** React Hot Toast  
- **Deployment:**  
  - Frontend → Vercel  
  - Backend → Railway / Render / AWS  
  - Database → Supabase / ElephantSQL  

---

## 🔥 Key Features

### User Features
- Browse upcoming events (SSR for SEO)  
- Register / Login / Logout (JWT-based auth)  
- Book tickets for events with real-time validation  
- View booking history  
- Responsive UI for mobile & desktop  

### Admin Features
- Create, edit, delete events  
- Manage bookings (approve / cancel)  
- View analytics dashboard (number of bookings, popular events)  
- Role-based access control (admin vs regular user)  

### Backend API
- RESTful endpoints: `/users`, `/events`, `/bookings`  
- Input validation and error handling  
- JWT-protected routes for secure operations  

### Database Design (PostgreSQL)
- **Users:** `id`, `name`, `email`, `password_hash`, `role`  
- **Events:** `id`, `title`, `description`, `date`, `venue`, `price`, `capacity`  
- **Bookings:** `id`, `user_id`, `event_id`, `tickets_booked`, `status`  

---

## ✨ Extras / Enhancements
- Email notifications for booking confirmations (NodeMailer)  
- Search and filter events on frontend  
- Dark / Light mode for UI  
- Admin analytics charts using Recharts or Chart.js  
- Pre-rendered event pages for SEO (SSR & SSG)  

---

## 📸 Screenshots / Demo
- **Homepage:** List of upcoming events  
- **Event Details:** Event description and "Book Now" button  
- **Booking Flow:** User can select tickets and see confirmation toast  
- **Admin Dashboard:** Event management and booking analytics  

---

## 🚀 Deployment
- **Frontend:** Live on Vercel  
- **Backend API:** Live API  
- **Database:** Hosted on Supabase / ElephantSQL  

---

## 📝 My Contributions
- Built the full Next.js frontend, including dynamic pages, forms, and state management  
- Developed Node.js/Express backend with secure JWT-based authentication  
- Designed PostgreSQL relational database schema and implemented CRUD for events and bookings  
- Implemented role-based access, protected routes, and admin dashboard  
- Enhanced UX with responsive design, toast notifications, and hover animations
