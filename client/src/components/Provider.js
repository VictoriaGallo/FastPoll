import React, { useState, useEffect } from 'react';
import Context from './Context';
import axios from 'axios';
import { message } from 'antd';

import socket from './io';

const Provider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPolls();
    socket.on("update:server", () => {
      getPolls();
    });
  }, []);


  const getPolls = (callback) => {
    axios.get('/api/polls')
      .then(res => {
        setIsLoading(false);
        setPolls(res.data);
        callback && callback();
      })
      .catch(err => {
        console.log(err)
        message.error('Algo salió mal al obtener las encuestas', 3)
      });
  }

  const addVote = (id, value, callback) => {
    // eslint-disable-next-line 
    axios.patch(`/api/polls/cast/${id}`, { vote_id: value })
      .then(() => {
        getPolls(callback);
      })
      .catch(err => {
        console.log('ERROR Updating Poll', err);
        message.error('Algo ha fallado al votar', 3);
      });
  }

  const createPoll = (payload, callback, err) => {
    axios.post('/api/polls', payload)
      .then(() => {
        getPolls(callback);
      })
      .catch((error) => {
        err && err(error);
      });
  }

  const editPoll = (id, payload, callback, err) => {
    axios.patch(`/api/polls/${id}`, payload)
      .then(() => {
        getPolls(callback);
      })
      .catch(error => {
        err && err(error);
        console.log('ERROR Updating Poll', err);
      })
  }

  const handleDeletePoll = (_id) => {
    // eslint-disable-next-line 
    axios.delete(`/api/polls/${_id}`, { data: { poll_id: _id } })
      .then(() => {
        getPolls();
        message.success('La encuesta ha sido eliminada.', 3)
      })
      .catch(err => {
        console.log(err);
        message.error('Algo ha ido mal al borrar la encuesta', 3)
      });
  }

  return (
    <Context.Provider
      value={{
        polls: polls,
        isLoading: isLoading,
        getPolls: getPolls,
        handleDeletePoll: handleDeletePoll,
        addVote: addVote,
        createPoll: createPoll,
        editPoll: editPoll
      }}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider;