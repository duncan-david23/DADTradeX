import express from 'express';
import { getAccountBalance, updateAccountBalance } from '../controllers/accountBalanceController.js';

const router = express.Router();


router.get('/user-account/:id', getAccountBalance);
router.put('/user-account', updateAccountBalance);



export default router;