import { Router } from 'express';

export const router = Router();

router.get('/categoroies', (req, res) => {
  res.send('ok');
});

router.post('/categoroies', (req, res) => {
  res.send('ok');
});

router.get('/products', (req, res) => {
  res.send('ok');
});

router.post('/products', (req, res) => {
  res.send('ok');
});

router.get('/categoreis/:categoryId/products', (req, res) => {
  res.send('ok');
});

router.get('/orders', (req, res) => {
  res.send('ok');
});

router.post('/orders', (req, res) => {
  res.send('ok');
});

router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
