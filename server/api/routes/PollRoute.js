const express = require('express');
const PollRoute = express.Router();
const PollModel = require('../../models/PollModel');

// GET all polls
PollRoute.get('/', (req, res) => {
  PollModel.find()
    .then(data => {
      const response = {
        count: data.length,
        polls: data.map(mapped => {
          return {
            name: mapped.name,
            votes: mapped.votes,
            _id: mapped._id,
            request: {
              type: 'GET',
              url: `http://localhost:5000/api/polls/${mapped._id}`
            }
          };
        })
      };
      res.send(response);
    })
    .catch(err => {
      console.log('Algo ha fallado al obtener los datos ', err);
      res.status(404).json({ error: err });
    });
});

// GET single poll
PollRoute.get('/:poll_id', (req, res) => {
  PollModel.findById({ _id: req.params.poll_id })
    .then(data => {
      const response = {
        name: data.name,
        votes: data.votes,
        _id: req.params.poll_id,
        request: {
          type: 'GET',
          url: `http://localhost:5000/api/polls`
        }
      };
      res.send(response);
    })
    .catch(err => {
      console.log('Algo ha fallado al obtener los datos ', err);
      res.status(404).json({ error: err });
    });
});


// POST create new poll
PollRoute.post('/', (req, res) => {
  PollModel.create(req.body)
    .then(data => {
      const response = {
        name: data.name,
        votes: data.votes,
        request: {
          type: 'GET',
          url: `http://localhost:5000/api/polls/${data._id}`
        }
      };
      res.send(response);
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).json({ error: err.message });
    });
});

// PATCH update poll values
PollRoute.patch('/:poll_id', (req, res) => {
  const poll_id = req.params.poll_id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  // [{ propName : votes[name], value : 1 }]
  PollModel.updateOne({ _id: poll_id }, { $set: updateOps })
    .then(data => {
      res.send({
        message: 'Se ha actualizado la encuesta!',
        request: {
          type: 'GET',
          url: `http://localhost:5000/api/polls/${poll_id}`
        }
      });
    })
    .catch(err => {
      console.log('Algo ha fallado al votar');
      res.status(501).json({ error: err.message });
    });
});

// Cast Votes
PollRoute.patch('/cast/:poll_id', (req, res) => {
  const poll_id = req.params.poll_id;
  const vote_id = req.body.vote_id;
  PollModel.findOneAndUpdate(
    { _id: poll_id, 'votes._id': vote_id },
    { $inc: { 'votes.$.value': 10 } },
    { new: true } // Esto devuelve el documento actualizado
  )
    .then(result => {
      if (result) {
        res.send({
          ...result._doc,
          message: 'Muchas Gracias Por votar!',
          request: {
            type: 'GET',
            url: `http://localhost:5000/api/polls/${poll_id}`
          }
        });
      } else {
        res.status(404).json({ message: 'Encuesta no encontrada' });
      }
    })
    .catch(err => {
      res.status(501).json({ error: err });
    })
  });


// delete Polls
PollRoute.delete('/:poll_id', (req, res) => {
  const poll_id = req.params.poll_id;
  PollModel.findByIdAndDelete(poll_id)
    .then(() => {
      res.send({
        message: 'La encuesta se ha eliminado correctamente',
        request: {
          type: 'GET',
          url: `http://localhost:5000/api/polls`
        }
      });
    })
    .catch(err => {
      console.log('Algo salió mal al borrar la encuesta');
      res.status(501).json({ erro: err });
    });
});


module.exports = PollRoute;
