import React from 'react';
import styled from 'styled-components';

import { Divider, Row, Col, Tag } from 'antd';
import Workflow from './Workflow';
import ToolsUsed from './ToolsUsed';

const AboutWrapper = styled.section`
  color: #252525;
  padding : 20px;
  margin: auto;

  .timeline {
    padding: 30px;
  }

  .tools-used {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 15px;
    flex-wrap: wrap;

    .ant-card {
      flex: 1 200px;
      width: 200px;
      height: 220px;
      margin: 5px;
    }
  }
`


function About() {
  return (
    <AboutWrapper>
      <Row type="flex" justify="center">
        <Col sm={24} md={16}>
          <Divider orientation="left" style={{ fontSize: "24px" }}> Sobre FastPoll </Divider>

          <p>
            FastPoll es una aplicación de encuestas públicas en tiempo real creada por Karol payares y Laura Gallo que utiliza React y Nodejs.
            Fast poll le permite crear, editar, actualizar, eliminar encuestas públicas y votar en ellos públicamente.
            Este proyecto usa de react, nodejs y restfull apis todos juntos
            <br />
          </p>

          <Divider orientation="left" style={{ fontSize: "24px" }}> Herramientas Usadas </Divider>
          <Tag><a href="https://chartjs.org">chart.js</a></Tag>
          <Tag><a href="https://casesandberg.github.io/react-color/">react-color</a></Tag>
          <Tag><a href="https://www.styled-components.com">styled-components</a></Tag>
          <Tag><a href="http://socket.io">socket.io</a></Tag>
          <ToolsUsed />
          
          <Divider orientation="left" style={{ fontSize: "24px" }}> Flujo de trabajo </Divider>
          <Workflow />

        </Col>
      </Row>
    </AboutWrapper>
  )
}

export default About;