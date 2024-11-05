import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import db from './configs/db.js'
import userRouter from './routes/userRouter.js'
import accountBalanceRouter from './routes/accountBalanceRouter.js'



const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());



  app.get('/', (req,res)=> {
    res.send('Welcome To DADTradeX');
  })

  app.get('/users', async (req, res)=> {
       const response = await db.query('SELECT * FROM users_t');
      
       const userInfo = response.rows;
       res.json(userInfo);
       

  })

//   ---- MIDDLEWARE TO ACCESS ROUTES --------
  app.use('/users', userRouter);
  app.use('/users', accountBalanceRouter);

  

  




  db.connect((err)=> {
    if(err){
        console.error('error connecting to the database', err.stack);
    } else{
        console.log('database connected successfully');
    }
  })



app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
    
})