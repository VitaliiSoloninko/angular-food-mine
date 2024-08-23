v0.1 Home page: header and food items
v0.2 Home page: search foods
v0.3 Home page: tags bar
v0.4 Food page
v0.5 Cart page
v0.6 Not found products
v0.7 Backend 1 - (Express)
v0.8 Login page
v0.9 Logout
v0.10 Login default component
v0.11 Connecting to MongoDB
v0.11 Backend 2 - (MongoDB, mongoose)
v0.13 Register page (endpoint /register)
v0.14 Loading! (Interceptor)

FRONT END

1. Header +
   1.1 Generate Component
   1.2 Add HTML
   1.3 Add CSS
2. List Food +
   2.1 Create Food model
   2.2 Create data.ts (add sample foods)
   2.3 Add images to assets
   2.4 Create Food service
   2.5 Create Home component
3. Search +
   3.1 Add method to Food service +
   3.2 Add search route +
   3.3 Show search result in Home component +
   3.4 Generate search component
   3.4.1 add to home component
   3.4.2 Add ts
   3.4.3 Add html
   3.4.4 Add css
4. Tags Bar +
   4.1 Create Tag model
   4.2 Add sample tags to data.ts
   4.3 Food service
   4.3.1 Add get all tags method
   4.3.2 Add get all foods by tag method
   4.4 Add tags route
   4.5 Show tag result in Home component
   4.6 Generate Tags component
   4.6.1 Add to home component
   4.6.2 Add ts
   4.6.3 Add html
   4.6.4 Add css
5. Food Page +
   5.1 Add method to food service
   5.2 Generate Food Page component
   5.2.1 Add Route
   5.2.2 Add ts
   5.2.3 Add html
   5.2.4 Add css
6. Cart Page +
   6.1 Create CartItem Model
   6.2 Create Cart Model
   6.3 Generate Cart service
   6.4 In Food Page - Add to Cart Button
   6.5 Generate Cart page component
   6.5.1 Cart page - Add Route
   6.5.2 Cart page - Add ts
   6.5.3 Cart page - Add html
   6.5.4 Cart page - Add css
7. Not Found! +
   7.1. Generate component
   7.2 Not Found - Add ts
   7.3 Not Found - Add html
   7.4 Not Found - Add css
   7.5 Add To Pages
   7.5.1 Home Page
   7.5.2 Food Page
   7.5.3 Cart Page
8. Login Page 1
   9.1 Generate component
   9.1.2 Add to routers
   9.1.3 Add ts
   9.1.4 Add html
   9.1.5 Import Reactive Forms Module
   9.1.6 Add css
   9.2 Add Login api
   9.2.1 Use json
   9.2.2 Add jsonwebtoken
   9.2.3 Test Using Postman
9. Login Page 2 Generate User Service
   1. Generate User model
   2. Add User Subject
   3. Add login Method
      1. Add User Urls
      2. Generate IUserLogin interface 3. Add ngx-toastr
         1. Import Module 2. Import BrowserAnimationModule 3. Add styles in angular.json
         2. Add to Header
      3. Add Local Storage method
      4. Add logout Method
         1. Add to Header
10. Make Components for Login page

    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

11. Connect Login API to MongoDB Atlas BACKEND

    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. jsonwebtoken
       5. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis

12. Create and connecting to Backend
    8.1 Create backend folder
    8.2 npm init
    8.3 npm install typescript
    8.4 Create tsconfig.json
    8.5 Create .gitignore
    8.6 Copy data.ts to backend/src
    8.7 npm install express cors
    8.8 Create server.ts
    8.8.1 install @types
    8.8.2 Add Api
    8.9 npm install nodemon ts-node --save-dev
    8.10 Add urs.ts to frontend
    8.11 Add HttpClient module
    8.12 Update food service
