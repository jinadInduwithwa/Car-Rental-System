# Car Rental Project

This is a car rental application built with Node.js and MongoDB. The application provides functionalities for user authentication, vehicle management, booking management, and category management.

## Features

- User signup and signin
- Password management (forgot/change)
- Vehicle management (CRUD operations)
- Booking management (CRUD operations)
- Category management (CRUD operations)
- Admin and user role identification
- Secure API endpoints with JWT authentication
- Responsive and user-friendly interface (if applicable)

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building APIs and web applications.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For securely transmitting information between parties.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Helmet**: Middleware for securing Express apps by setting various HTTP headers.
- **Cookie Parser**: Middleware for parsing cookies from the request.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jinadInduwithwa/Car-Rental-System.git
   ```

2. Change directory into the project folder:

   ```bash
   cd car-rental-System
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB URI and other environment variables:

   ```plaintext
   MONGO_URI=your_mongodb_uri
   PORT=3000
   ```

5. Start the server:

   ```bash
   npm start
   ```

After starting the server, you can access the API endpoints using a tool like Postman or through your front-end application. The server will be running at `http://localhost:3000`.

## Example API Calls

| Action             | Method | Endpoint |
|--------------------|--------|--------------------------------|
| Signup a user     | POST   | `/api/auth/signup` |
| Create a booking  | POST   | `/api/booking/create-booking` |
| Get all vehicles  | GET    | `/api/vehicle/all-vehicles` |

## API Endpoints

### Authentication Routes

| Action                          | Method | Endpoint |
|---------------------------------|--------|---------------------------------------------|
| Create a new user               | POST   | `/api/auth/signup` |
| User login                      | POST   | `/api/auth/signin` |
| User logout                     | POST   | `/api/auth/signout` |
| Send verification code          | PATCH  | `/api/auth/sent-verification-code` |
| Verify the code                 | PATCH  | `/api/auth/verify-verification-code` |
| Send forgot password code       | PATCH  | `/api/auth/send-forgot-password-code` |
| Verify forgot password code     | PATCH  | `/api/auth/verify-forgot-password-code` |
| Change user password            | PATCH  | `/api/auth/change-password` |
| Admin check                     | GET    | `/api/auth/admin` |

### Booking Routes

| Action                  | Method | Endpoint |
|-------------------------|--------|-----------------------------------|
| Get all bookings        | GET    | `/api/booking/all-booking` |
| Get a single booking    | GET    | `/api/booking/single-booking` |
| Get bookings by user    | GET    | `/api/booking/user-booking` |
| Create a new booking    | POST   | `/api/booking/create-booking` |
| Update an existing booking | PUT    | `/api/booking/update-booking` |
| Delete a booking        | DELETE | `/api/booking/delete-booking` |

### Vehicle Routes

| Action                  | Method | Endpoint |
|-------------------------|--------|---------------------------------|
| Get all vehicles        | GET    | `/api/vehicle/all-vehicles` |
| Get a single vehicle    | GET    | `/api/vehicle/single-vehicle` |
| Create a new vehicle    | POST   | `/api/vehicle/create-vehicle` |
| Update an existing vehicle | PUT    | `/api/vehicle/update-vehicle` |
| Delete a vehicle        | DELETE | `/api/vehicle/delete-vehicle` |

### Category Routes

| Action                  | Method | Endpoint |
|-------------------------|--------|----------------------------------|
| Get all categories      | GET    | `/api/category/all-category` |
| Create a new category   | POST   | `/api/category/create-category` |
| Update an existing category | PUT    | `/api/category/update-category` |
| Delete a category       | DELETE | `/api/category/delete-category` |

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- Express.js
- MongoDB
- Node.js
