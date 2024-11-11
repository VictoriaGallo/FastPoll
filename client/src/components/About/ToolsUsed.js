import React from 'react'
import { Card, Icon } from 'antd';

const data = [
  {
    title: "React",
    url: 'https://reactjs.org',
    summery: 'React es una biblioteca JavaScript que pretende simplificar el desarrollo de interfaces visuales.'
  },
  {
    title: "Ant Design",
    url: 'https://ant.design',
    summery: 'Un sistema de diseño con valores de Naturaleza y Determinación para mejorar la experiencia de usuario de las aplicaciones empresariales'
  },
  {
    title: "Express",
    url: 'https://expressjs.com/',
    summery: 'Express es un framework de aplicaciones web Node.js mínimo y flexible que ofrece un sólido conjunto de funciones para aplicaciones web y móviles.'
  },
  {
    title: "Axios",
    url: 'https://github.com/axios/axios',
    summery: 'Cliente HTTP basado en promesas para el navegador y node.js.'
  },
  {
    title: "Mongoosejs",
    url: 'https://mongoosejs.com/',
    summery: 'Mongoose ofrece una solución sencilla, basada en esquemas, para modelar los datos de su aplicación.'
  },
  {
    title: "mLab",
    url: 'https://mlab.com/',
    summery: 'Base de datos como servicio para MongoDB. Ahora forma parte de la familia MongoDB, con más de 1 millón de despliegues en todo el mundo.'
  },
]

function ToolsUsed() {
  return (
    <section className="herramientas-utilizadas">
      {data.map((item, i) => {
        return (
          <Card
            key={i}
            title={item.title}
            extra={<a rel="noopener noreferrer" target="_blank" href={item.url} ><Icon type="login" /></a>}
          >
            <p>{item.summery}</p>
          </Card>
        )
      })}
    </section>
  )
}


export default ToolsUsed;