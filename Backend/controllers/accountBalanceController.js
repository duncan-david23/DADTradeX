import db from '../configs/db.js'


export const getAccountBalance = async(req, res)=> {
        const userId = req.params.id;
        
        try {
            const userBalance = await db.query('SELECT users_t.username, user_account.balance FROM users_t INNER JOIN user_account ON user_account.user_id=users_t.id WHERE users_t.id=$1', [userId]);

            if(!userBalance){
                    return res.json({message: "user with such id does not exist"})
                };


        res.status(200).json(userBalance.rows);

        } catch (error) {
            console.error('error fetching user account balance', err.stack);
            res.send('error fetching user account balance')
        }
        
        
        
    }