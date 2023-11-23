import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3333, () => {
      console.log('🚀 Server is running on http://localhost:3333');
    });
  })
  .catch(() => { console.log('Erro ao connectar no mongodb'); });


