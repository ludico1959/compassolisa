# COMPASSOLISA 🚘

This API RESTful includes the four basic CRUD operations and it is about a luxury and semi luxury car rental system.

## 💾 Resources

- Node.JS v14.17.6;
- MongoDB v.4.4.9;
- Node Third Party Modules:
  - Express.Js v.4.17.1,
  - Mongoose v.6.0.11,
  - Joi v17.4.2,
  - @joi/date v2.1.0 (Joi extensions for advance date rules),
  - Moment v2.29.1,
  - Mongoose Paginate v2 v1.4.2,
  - bcryptjs v2.4.3,
  - JSON Web Token v8.5.1,
  - Swagger UI Express v4.1.6,
  - Axios v0.24.0,
  - Nodemon v2.0.14 (devDependencie); 
- JSON data (for sending and returning data);
- ViaCEP - Webservice CEP;
- Postman v8.12.5 (for testing endpoits).

## 💻 Run locally

If you want to run the project on your local machine, just follow the steps below:

### 1️⃣ Starting...

To get started, you simply need to clone the project repository on your machine and install the dependencies.

```
  git clone https://github.com/ludico1959/compassolisa
```

### 2️⃣ Requirements

Before installing the dependencies from the project, you need to have already installed on your machine:

* **Node.Js**: If you don't have it, just download [here](https://nodejs.org/en/download/).
* **MongoDB**: If you don't have it, just download [here](https://www.mongodb.com/try/download/community).

### 3️⃣ Instaling dependencies

Open cmd.exe (if you are using Windows) or another command-line interpreter and enter the path of your project. Then just type the following instruction: 

```
npm install
```

By typing the statement above, it will automatically download all the dependencies listed in the package.json file inside the folder **node_modules**:


### 4️⃣ Running the application

Well, now on the same cmd.exe screen (or another command-line interpreter), just start the server for the project to run locally typing:

```
node src/app/server.js
```

Then you will need to open another terminal on your machine and start MongoDB. Just type the following command on the cmd.exe (or another command-line interpreter) screen:

```
mongod
```

If MongoDB is properly installed on your machine, it will start the service showing that port 27017 has been started.

### 5️⃣ Testing the application 
There are two options to test this API: 

#### 🎨 SWAGGER UI
The first one, using Swagger UI, is more user friendly. To use it, just type the following route in the seach bar of your favorite brownser!

```
http://localhost:3000/api/v1/api-docs/
```

#### 📬 POSTMAN
The second one is using the Postman request collection from the repository to easily test the endpoints!
The file name is **postman_collection.json** and to use it, just download the Postman [here](https://www.postman.com/downloads/).
