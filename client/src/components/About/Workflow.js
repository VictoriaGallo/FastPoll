import React from 'react';
import { Timeline } from 'antd';

const Workflow = () => {
  return (
    <Timeline className="timeline" mode="alternate">
      <Timeline.Item>
        <h3>Planificación</h3>
        <p>Lo primero en las aplicaciones fullstack es configurar el servidor backend</p>
      </Timeline.Item>
      <Timeline.Item color="green">
        <h3>Configuración de nodejs</h3>
        <p>Hemos utilizado nodejs para configurar el backend de esta aplicación,
          porque nodejs es escalable, rápido y fácil de crear aplicaciones en tiempo real
              </p>
      </Timeline.Item>
      <Timeline.Item color="red">
        <h3>Express, Mongoose, mLab</h3>
        <p>el tercer paso configuramos Express Server, Mongoose Schemas/Models
            y conectamos nuestra aplicación con la base de datos mLab que actuará como DBaaS (Database as a service)
              </p>
      </Timeline.Item>
      <Timeline.Item color="brown">
        <h3>Planificar la estructura de la API</h3>
        <p>La API RESTfull debe ser coherente y fácil de integrar con nuestra aplicación Front-end, por lo que es necesario planificar los modelos de API.
          Por ejemplo, nuestra API de encuestas tiene el siguiente aspecto /api/polls
              </p>
      </Timeline.Item>
      <Timeline.Item color="pink">
        <h3>Creación de API Endpoints</h3>
        <p>
          Básicamente estamos creando una API CRUD (Create, Read, Update, Delete) que se puede hacer fácilmente con consultas mongoose.
              </p>
      </Timeline.Item>
      <Timeline.Item color="orange">
        <h3>Front-End</h3>
        <p>
          ya que hemos terminado con el back-end vamos a añadir el código del lado del cliente, vamos a utilizar create-react-app boilerplate para hacernos la vida más fácil.
          para conectar nuestro front-end con el back-end vamos a usar el paquete concurrently NPM para arrancar nuestros dos servidores al mismo tiempo.
          y para hablar con nuestro api endpoint tenemos que establecer un proxy a nuestro package.json del lado del cliente «proxy»: «http://localhost:5000»
              </p>
      </Timeline.Item>
      <Timeline.Item color="purple">
        <h3>UI</h3>
        <p>
          tenemos que permitir a los usuarios interactuar con nuestra base de datos backend a través de una interfaz de usuario elegante.
              así que decidí utilizar  <a href="https://ant.design">Ant Design</a> para hacer las UIs.
          y proporciona todos los componentes de interfaz de usuario elegantes que se pueden utilizar fácilmente integrado con nuestra aplicación
          por ejemplo Menu, List, Input, Card, Popover, Icon
              </p>
      </Timeline.Item>
      <Timeline.Item color="yellow">
        <h3>En tiempo real</h3>
        <p>
          Después de configurar nuestra interfaz de usuario para nuestras operaciones CRUD del lado del cliente, utilicé <a href="https://socket.io/">socket.io</a> para que nuestra aplicación funcione en tiempo real
          y hemos utilizado ReactContextAPI para gestionar el estado global de la aplicación
              </p>
      </Timeline.Item>
      <Timeline.Item>
        <h3>Despliegue</h3>
        <p>
          nosotras usamos <a href="https://render.com">Render</a> para desplegar nuestra aplicación en línea,
          Render es una plataforma que permite desplegar frontend y backend desde un solo repositorio.
          Finalmente Render es compatible con una amplia variedad de frameworks y lenguajes de programación, incluyendo React y Node.js. 
              </p>
      </Timeline.Item>
    </Timeline>
  )
}

export default Workflow;
