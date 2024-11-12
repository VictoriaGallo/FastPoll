# FastPoll
FastPoll está organizado en una estructura de aplicación de pila completa (full-stack) que incluye un cliente (frontend) y un servidor (backend). el proyecto ilustra cómo integrar React, Node.js y APIs RESTful para una aplicación de votación en tiempo real que usa actualizaciones en tiempo real y gestión de datos con MongoDB.

**creado por Laura Gallo y Karol Payares.**

[figma](https://www.figma.com/design/EnaUHGJAU02P91KWF58iHR/Fast-Poll?node-id=0-1&t=J5gVXj1OTzxSIc7i-1)

**Frontend (React):**
1. **App.js** maneja la estructura de enrutamiento de la aplicación, permitiendo navegación entre componentes como **Polls, CreatePoll, y About**. Utiliza **BrowserRouter** de **react-router-dom** para las rutas.
2. **CastVote.js** es un componente clave para votar en tiempo real. Utiliza **Modal** y **Radio** de Ant Design para el formulario de votación, e integra **socket.io** para actualizar los votos en tiempo real. El componente valida y registra los votos con el backend.

**Backend (Node.js y Express):**
1. En **package.json**, se configuran comandos de inicio, incluyendo scripts de desarrollo y despliegue en Heroku.
2. El backend utiliza **Express** para las APIs RESTful, **Mongoose** para el manejo de la base de datos MongoDB, y **socket.io** para la actualización en tiempo real de los resultados de las encuestas.
3. Las rutas de la API incluyen:
- GET para obtener todas las encuestas o una encuesta específica.
- POST para crear una encuesta nueva.
- PATCH para actualizar o registrar un voto.
- DELETE para eliminar una encuesta.

**Readme y Configuración:**
1. El archivo readme.md explica los pasos para ejecutar el proyecto y detalla los endpoints de la API, lo que facilita la comprensión y uso de la API RESTful.
2. Herramientas usadas: React, Node.js, Express, Mongoose, socket.io, Ant Design (para el estilo del frontend) y Heroku para despliegue.

**Resumen de Funcionalidades y Flujo:**
- Crear Encuestas: Puedes crear encuestas con múltiples opciones de voto.
- Votar: Los usuarios pueden votar en encuestas existentes, y las actualizaciones son reflejadas en tiempo real.
- Actualización en tiempo real: Mediante socket.io, los votos se sincronizan en todos los dispositivos conectados.

## API Endpoints: 

### GET - GET POLLS
```js
// GET ALL POLLS
/api/polls -> 
[
  {
    name: String,
    votes: [Object],
    _id: String,
    request: {
      type: 'GET',
      url: `/api/polls/${_id}`
    }
  }
]

// GET SINGLE POLL
/api/polls/:poll_id -> 
{
  name: String,
  votes: [Object],
  _id: String,
  request: {
    type: 'GET',
    url:  `/api/polls/`
  }
}
```


### POST - CREATE POLLS
```js
// PAYLOAD TO SEND
payload = {
  name: String,
  votes: [
    {
      name : String,
      value: Number,
      color: String
    }
  ]
}

/api/polls -> 
{
  name: String,
  votes: [Object],
  request: {
    type: 'GET',
    url: `/api/polls/_id`
  }
}



```

### PATCH - UPDATE POLLS
```js
// PAYLOAD TO SEND
payload = [
  {"propName" : "name", "value" : "new name"},
  {"propName" : "votes.0.value", "value" : "80"},
  ...
]

/api/polls/:poll_id ->
{
  message: 'Se ha actualizado la encuesta!',
  request: {
    type: 'GET',
    url: `/api/polls/_id`
  }
}
```


### PATCH - VOTE POLLS
```js
// PAYLOAD TO SEND
payload = vote_id : String

/api/polls/cast/:poll_id ->
{
  name: String,
  votes: [Object],
  _id: String,
  message: 'Muchas gracias por votar!',
  request: {
    type: 'GET',
    url: `/api/polls/_id`
  }
}
```

### DELETE - DELETE POLL
```js
/api/polls/:poll_id ->
{
  message: 'Se ha eliminado la encuesta',
  request: {
    type: 'GET',
    url: `/api/polls`
  }
}
```
### datos in mongoatlas
```js
poll
{
  "_id": {
    "$oid": "672bd87e1b165248d44f2449"
  },
  "name": "string",
  "votes": {
    "$ref": "votes",
    "$id": {
      "$oid": "672c1ada363ebb5bf8ad5379"
    }
  }
}
```

```js
votes
{
  "_id": {
    "$oid": "672c1ada363ebb5bf8ad5379"
  },
  "name": "String",
  "value": "number",
  "color": "String"
}
```
## :open_file_folder: What's inside?

A quick look at the folder structure of this project.
    
    .
    ├── client
    |   ├─build
    |   ├─node_modules
    |   ├─public
    │   └─src
    └── server
        │
        ├───api
        ├───helpers
        ├───models
        ├───app.js
        └───serve.js


## Get Started
npm install -g nodemon

Install all the dependencies
```bash
npm install
``` 

Start the application on localhost:3000
```bash
npm run dev
``` 


### NPM Commands
start the application
```bash
npm run dev
``` 

start the backend server
```bash
npm start
```

watch for changes in server
```bash
npm run watch-server
```

in the ./clients folder to build react front-end type
```bash
npm run build
```


## Tools Used

* [React](https://reactjs.org)
* [AntDesign](https://ant.design)
* [Nodejs](https://nodejs.org/)
* [Heroku](https://heroku.com/)
* [Express](https://expressjs.com/)
* [Axios](https://github.com/axios/axios)
* [Mongoosejs](https://mongoosejs.com/)
