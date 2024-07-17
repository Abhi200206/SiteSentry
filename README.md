# siteSentry

siteSentry is a robust and user-friendly application designed to monitor websites. Users can sign up, provide their website frontend or backend URLs, and receive email notifications if their websites go down. This ensures the reliability and uptime of web services, giving users peace of mind.

## Features

- User registration and authentication
- URL monitoring for both frontend and backend
- Email notifications when a website goes down
- Secure password storage
- JWT-based session management

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A web application framework for Node.js.
- **Prisma**: An ORM (Object-Relational Mapping) tool for database management.
- **Axios**: A promise-based HTTP client for making requests.
- **Gmail API**: For sending email notifications.
- **bcryptjs**: For hashing passwords securely.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **zod**: For schema declaration and validation.
- **dotenv**: For managing environment variables.
- **cors**: For enabling Cross-Origin Resource Sharing.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- A Google account for Gmail API integration
- PostgreSQL or another database supported by Prisma

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Abhi200206/siteSentry.git
cd siteSentry
```

2. **Install dependencies for the backend:**

```bash
cd backend
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the `backend` directory and add the following:

```plaintext
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token
```

4. **Install dependencies for the frontend:**

```bash
cd frontend
npm install
```

### Running the Application

1. **Start the backend server:**

```bash
cd backend
npm start
```

2. **Start the frontend development server:**

```bash
cd frontend
npm start
```

### Usage

1. **Sign up and log in:**

   - Open your browser and navigate to `http://localhost:3000`.
   - Sign up for a new account or log in if you already have one.

2. **Add URLs to monitor:**

   - After logging in, you can add the frontend and backend URLs of the websites you want to monitor.
   - siteSentry will start monitoring these URLs and send you an email notification if any of them go down.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
