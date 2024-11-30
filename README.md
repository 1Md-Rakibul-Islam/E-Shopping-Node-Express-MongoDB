# E-Shopping-Node-Express-MongoDB

# API Domain: (https://e-shopping-iota.vercel.app)

## Features

- Create, update, and delete products.
- Search products by title, description, or category.
- Get all products.
- Get single product by ID.
- Add orders.
- Get orders by email.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- zod input validation

### Steps to Run Locally

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/Mahmudmhb/Express-application-with-TypeScript>Navigate to the project directory:

   ```

2.Navigate to the project directory:
cd <project_directory>

3.Install dependencies:
npm install

4.Run the dev server:
npm run start:dev

5.Build the application:
npm run build

5.Set up environment variables:

Create a .env file in the root directory.
Define the following environment variables:
PORT: Port number for the server (e.g., 5000).
MONGODB_URI: MongoDB connection URI (e.g., mongodb://localhost:27017/mydatabase).

Define the following environment variables:

NODE_ENV=development
PORT=5000
DATABASE_URL=MongoDB connection URI (e.g., mongodb://localhost:27017/mydatabase).

Access the API endpoints:

Once the server is running, you can access the API endpoints using tools like Postman or curl. Here are some example endpoints:

API Endpoints:

# base url : (https://e-shopping-iota.vercel.app)

Products API:

### **1. Create a New Product**

- **Endpoint**: **`/api/products`**
- **Method:** `POST`
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    

### **2. Retrieve a List of All Products**

- **Endpoint**: **`/api/products`**
- **Method:** `GET`

### **3. Retrieve a Specific Product by ID**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `GET`**

### **4. Update Product Information**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `PUT`**
- **Sample Request Body**:
    
    ```json
    {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
    ```
    

### **5. Delete a Product**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `DELETE`**

### **6. Search a product**

- **Endpoint**: `/api/products?searchTerm=iphone`
- **Method: GET**

## Order Management

### **Order Management API Endpoints**

### **1.Create a New Order**

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**
- **Request Body**:
    
    ```json
    {
        "email": "test1@exampole.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 55,
        "quantity": 1
    }
    ```

### **2.Retrieve All Orders**

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**

### **3. Retrieve Orders by User Email**

- **Endpoint**: `/api/orders?email=level2@programming-hero.com`
- **Method:** `GET`