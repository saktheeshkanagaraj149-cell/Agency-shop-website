# 🏢 Sri Balaji Agency - Industrial Supply E-Commerce Platform

A modern, responsive full-stack e-commerce website for **Sri Balaji Agency**, an authorized dealer of premium industrial supplies in Sivakasi, Tamil Nadu. The platform showcases products, manages customer leads, and provides seamless shopping experience with integrated customer communication.

---

## 📋 Project Overview

**Sri Balaji Agency** is a trusted supplier of:
- ✅ **PVC Pipes & Fittings** (VAHINI, ASHIRVAD, FINOLEX)
- ✅ **Water Storage Solutions** (AQUATECH, VAHINI, AQUA GOLD)
- ✅ **Electrical Supplies** (V-GUARD, ANCHOR, SAMUDRA)
- ✅ **Paints & Building Materials** (ASIAN PAINTS, CERA)
- ✅ **Motors & Pumps** (SAMUDRA, ELGI)

**📍 Location:** 112B, Subramaniapuram Colony, Bypass Road, Sivakasi, Tamil Nadu  
**📞 Phone:** 9443962675  
**📧 Email:** info@sribalajiagency.com  
**🕒 Hours:** Mon-Sat: 9AM-8PM, Sun: 10AM-6PM

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS + Custom CSS
- **Icons:** Lucide React
- **State Management:** React Hooks
- **HTTP Client:** Fetch API
- **Build Tool:** Vite (Fast HMR & Optimization)

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Email Service:** Nodemailer (Gmail)
- **CORS:** Enabled for frontend communication
- **Environment:** dotenv for configuration

---

## 📁 Project Structure

```
Agency-shop-website/
├── src/                           # Frontend Source Code
│   ├── components/                # React Components
│   │   ├── Header.jsx            # Navigation & Search
│   │   ├── Hero.jsx              # Landing Hero Section
│   │   ├── Products.jsx          # Product Grid & Filters
│   │   ├── Categories.jsx        # Product Categories
│   │   ├── Brands.jsx            # Brand Showcase
│   │   ├── Testimonials.jsx      # Customer Reviews
│   │   ├── CustomerForm.jsx      # Lead Capture Form
│   │   ├── Chatbot.jsx           # AI Chat Assistant
│   │   ├── Footer.jsx            # Footer Section
│   │   └── Contact.jsx           # Contact Info & Map
│   ├── data/
│   │   └── products.js           # Product Database
│   ├── assets/                   # Images & SVG Icons
│   ├── App.jsx                   # Main App Component
│   ├── main.jsx                  # React Entry Point
│   ├── index.css                 # Global Styles
│   └── App.css                   # App Styles
├── backend/                       # Backend API
│   ├── server.js                 # Express Server
│   ├── config/
│   │   └── db.js                 # MongoDB Connection
│   ├── routes/
│   │   └── customers.js          # Customer API Routes
│   ├── controllers/
│   │   └── customerController.js # Business Logic
│   ├── models/
│   │   └── Customer.js           # MongoDB Schema
│   ├── utils/
│   │   └── emailService.js       # Email Notifications
│   ├── .env                      # Environment Variables
│   ├── .env.example              # Environment Template
│   └── package.json              # Backend Dependencies
├── index.html                    # HTML Entry Point
├── vite.config.js                # Vite Configuration
├── tailwind.config.js            # Tailwind CSS Config
├── eslint.config.js              # ESLint Configuration
├── package.json                  # Frontend Dependencies
└── README.md                      # This File
```

---

## ✨ Key Features

### **Frontend Features**
- 🎨 **Responsive Design** - Mobile-first approach (works on all devices)
- 🔍 **Product Search & Filtering** - By category, brand, price
- ⭐ **Product Ratings** - Star ratings for all products
- ❤️ **Wishlist** - Save favorite products
- 💬 **AI Chatbot** - Quick answers to common questions
- 📱 **Customer Contact Form** - Lead capture with validation
- 🎯 **Dynamic Product Catalog** - 500+ products
- 🌐 **Social Media Integration** - Instagram & WhatsApp links
- 📍 **Google Maps Integration** - Store location
- 🎬 **Smooth Animations** - Enhanced UX with CSS animations

### **Backend Features**
- 📧 **Automated Email System**
  - Customer confirmation emails
  - Admin lead notifications
  - Professional HTML templates
- 💾 **MongoDB Database** - Persistent customer data storage
- ✅ **Data Validation** - Email & form validation
- 🔄 **CORS Support** - Secure cross-origin requests
- 🛡️ **Error Handling** - Comprehensive error management
- 📝 **Customer Management** - Store & retrieve customer data

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14+)
- MongoDB Atlas Account (Cloud DB)
- Gmail Account (for email notifications)
- Git

### **Installation**

#### **1. Clone Repository**
```bash
git clone https://github.com/saktheeshkanagaraj149-cell/Agency-shop-website.git
cd Agency-shop-website
```

#### **2. Frontend Setup**
```bash
# Install dependencies
npm install

# Start development server (Frontend runs on http://localhost:5173)
npm run dev

# Build for production
npm run build
```

#### **3. Backend Setup**
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure environment variables (see below)
# Edit .env with your values

# Start backend server
npm start

# Or with nodemon (auto-reload)
npm run dev
```

### **Environment Configuration**

#### **Backend .env File**
```env
# MongoDB Connection String
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/sribalaji?retryWrites=true&w=majority

# Server Port
PORT=5000

# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password

# Admin Email for lead notifications
ADMIN_EMAIL=admin@sribalajiagency.com
```

**Gmail Setup:**
1. Enable 2-Factor Authentication on Gmail
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use the generated 16-character password in `.env`

---

## 📡 API Documentation

### **Base URL:** `http://localhost:5000`

### **Create Customer (Lead)**
```
POST /api/customers
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "address": "123 Street, City"
}

Response:
{
  "success": true,
  "data": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "address": "123 Street, City",
    "createdAt": "2024-01-30T10:30:00Z"
  },
  "message": "Details saved! Check your email for confirmation."
}
```

### **Get All Customers**
```
GET /api/customers

Response:
[
  {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "address": "123 Street, City",
    "createdAt": "2024-01-30T10:30:00Z"
  }
]
```

### **Database Schema - Customer**
```javascript
{
  name: String (required),
  email: String (required, unique),
  phone: String,
  address: String,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

## 📦 Dependencies

### **Frontend (package.json)**
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "lucide-react": "^latest"
  },
  "devDependencies": {
    "vite": "^latest",
    "@vitejs/plugin-react": "^latest",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "eslint": "^8.x"
  }
}
```

### **Backend (backend/package.json)**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "nodemailer": "^6.9.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

---

## 🎨 UI/UX Highlights

- **Color Scheme:** Blue, Purple, Orange gradients
- **Typography:** Modern sans-serif fonts
- **Spacing:** Consistent padding & margins
- **Animations:** Fade-in, slide, scale effects
- **Accessibility:** ARIA labels, semantic HTML
- **Performance:** Optimized images, lazy loading

---

## 🔐 Security Features

- ✅ Email validation on form submission
- ✅ Duplicate customer check (email unique)
- ✅ CORS enabled only for trusted domains
- ✅ Environment variables for sensitive data
- ✅ Error messages don't expose sensitive info
- ✅ Input sanitization

---

## 📊 Products Database

The platform includes **500+** products across categories:

| Category | Brands | Examples |
|----------|--------|----------|
| **PVC Pipes** | VAHINI, ASHIRVAD, FINOLEX | 3/4", 1", 1.5" pipes |
| **Water Tanks** | AQUATECH, VAHINI | 500L, 1000L, 2000L |
| **Electrical** | V-GUARD, ANCHOR, SAMUDRA | Wires, switches, motors |
| **Paints** | ASIAN PAINTS, CERA | Emulsions, enamels |
| **Bathroom** | CERA, PARRYWARE, SOMANY | Tiles, fixtures |

---

## 📞 Support & Contact

**For Customers:**
- 📞 **Phone:** 9443962675
- 📧 **Email:** info@sribalajiagency.com
- 📍 **Store:** 112B, Subramaniapuram Colony, Bypass Road, Sivakasi
- 💬 **WhatsApp:** https://wa.me/919443962675
- 📷 **Instagram:** [@sribalajiagency2010](https://www.instagram.com/sribalajiagency2010)

**For Technical Issues:**
- Create an issue on GitHub
- Contact: saktheesh.dev@gmail.com

---

## 🚀 Deployment

### **Frontend (Vercel/Netlify)**
```bash
npm run build
# Deploy the dist/ folder
```

### **Backend (Heroku/Railway/Render)**
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables in dashboard
4. Deploy!

---

## 📝 License

This project is developed for **Sri Balaji Agency**. All rights reserved.

**Proprietor:** S. Sakthi Vinayagam  
**Year:** 2024

---

## 🎯 Future Enhancements

- 🛒 **Shopping Cart & Checkout**
- 💳 **Payment Gateway Integration** (Razorpay/PayPal)
- 📦 **Order Tracking System**
- 🎁 **Loyalty & Reward Program**
- 📊 **Admin Dashboard** with analytics
- 🌍 **Multi-language Support**
- 🤖 **ML-based Product Recommendations**

---

## 👨‍💻 Developer

**Saktheesh K**  
Full-stack Developer | React & Node.js Specialist

---

## 🙏 Acknowledgments

- Tailwind CSS for beautiful styling
- Lucide React for icons
- Mongoose for database management
- Nodemailer for email automation

---

**Made with ❤️ for Sri Balaji Agency**