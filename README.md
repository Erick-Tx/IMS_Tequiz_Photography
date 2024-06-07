# IMS_Tequiz_Photography

## Overview
IMS_Tequiz_Photography is a comprehensive web application designed for the efficient management of a photography studio. The system aims to unify various operations including reservations, digital portfolio management, inventory tracking, and attire rentals to streamline processes and enhance customer service.

### Home Page
![image](https://github.com/Erick-Tx/IMS_Tequiz_Photography/assets/68562988/1a961332-c98d-4e11-b4bf-ff0ba60e089c)

### Services Page
![image](https://github.com/Erick-Tx/IMS_Tequiz_Photography/assets/68562988/63dbf053-fe26-448f-964b-762e701ff1ee)

### Products Page
![image](https://github.com/Erick-Tx/IMS_Tequiz_Photography/assets/68562988/494c324e-9763-4b1f-85fd-6e8698e3f0eb)




## Features
- **User Authentication**: Secure login and session management.
- **Photo Uploads**: Easy photo upload and management.
- **Gallery Management**: Dynamic gallery creation and management.
- **Reservation Management**: Schedule and track photography sessions.
- **Portfolio Management**: Organize and catalog photos and projects.
- **Product and Service Catalog**: Manage and display available products and services.
- **Equipment Inventory Management**: Track the availability and maintenance of equipment.
- **Attire Rental Management**: Handle attire rentals including scheduling and payments.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: NodeJS (JavaScript)
- **Database**: postgreSQL

## Installation
1. Clone the repository:
  ```bash
  git clone https://github.com/Erick-Tx/IMS_Tequiz_Photography.git
```

2. Navigate to the project directory:
  ```bash
  cd IMS_Tequiz_Photography
```
3. Install dependencies:
  ```bash
  npm install
```
4. Create a .env file based on the .env.example and configure your environment variables.
5. Start the application backend:
  ```bash
  npm run dev
```
5. Start the application frontend:
  ```bash
  cd Frontend
 ```
6. Open the index.html file.




Project Report
Design Choices
Unified System: The application replaces fragmented tools with a unified system to manage reservations, portfolios, inventory, and rentals.
PHP and Smarty: Chosen for their flexibility and ease of integration, PHP handles the backend logic while Smarty facilitates the separation of business logic from presentation.
MySQL Database: Used for its robustness and ability to handle complex queries efficiently.
Implementation Details
Entities and Relationships
Client: ClientID, Name, Email, Phone, Address
Session: SessionID, Date, StartTime, EndTime, Type, Place, Price, ClientID, ServiceID, PhotographerID, EquipmentID
PortfolioItem: PortfolioItemID, Title, Description, SessionID, Tags
Photographer: PhotographerID, Name, Speciality, Email, Phone, Availability
Equipment: EquipmentID, Type, Brand, Model, Condition, Availability
Product: ProductID, Name, Type, Description, Price
Service: ServiceID, Name, Type, Description, Price
AttireRental: AttireRentalID, Type, RentalDate, ReturnDate, Price, ClientID, ProductID
Database Schema
Detailed schema with primary and foreign keys, constraints, and data types to ensure data integrity.

Challenges Faced
Secure File Uploads: Implementing measures to prevent malicious files.
Cross-Browser Compatibility: Ensuring consistent user experience across different browsers.
Performance Optimization: Managing large volumes of images without compromising performance.
Future Improvements
User Roles and Permissions: Implementing finer access control for different user roles.
Advanced Image Processing: Integrating libraries for automatic resizing and thumbnail generation.
Enhanced UI/UX: Utilizing modern JavaScript frameworks for a more responsive and interactive interface.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License. For more details, visit the repository.
