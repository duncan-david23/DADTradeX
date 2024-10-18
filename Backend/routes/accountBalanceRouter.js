import express from 'express';
import { getAccountBalance } from '../controllers/accountBalanceController.js';

const router = express.Router();


router.get('/user-account/:id', getAccountBalance);



export default router;