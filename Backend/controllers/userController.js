import bcrypt from 'bcrypt';
import db from '../configs/db.js'


const saltRounds = 10;

export const createUser = async (req,res)=> {
    const {email, username, password} = req.body;
    
    try {
      
      let userExist = await db.query(`SELECT * FROM users_t WHERE email=$1`, [email]);
      
      if(userExist.rows.length > 0){
        return res.status(400).json({message:'User with this email already exists.'});
      }

      if(!username){
        return res.status(401).json({message:"user does not exist"});
      }
      
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      await db.query('INSERT INTO users_t (username, email, hash_password) VALUES($1, $2, $3)', [username, email, hashedPassword]);


      res.status(201).json({message:'user has been successfully registered'});

    } catch (error) {
      console.error('An error occurred during signup:', error);
      res.send('An error occurred during signup.');
    }
    
}

export const loginUser = async (req, res)=> {
    const {email, password} = req.body;

    try {
      let userExist = await db.query('SELECT * FROM users_t WHERE email=$1', [email]);
      if(userExist.rows.length === 0){
        return res.send('user with this email not found')
      }

      const user = userExist.rows[0];
      
      const matchedPassword = await bcrypt.compare(password, user.hash_password);
      if(!matchedPassword){
        return res.send('Incorrect password');
      }
      
      res.send('Logged in successfully');
      
    } catch (error) {
      console.error('error during login:', error)
      res.send('An error occurred during login.')
    }


  }