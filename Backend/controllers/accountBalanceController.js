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
            console.error('error fetching user account balance', error.stack);
        
        }
        
        
        
    }


    export const updateAccountBalance = async (req, res) => {
        const { userId, amount } = req.body;
    
        try {
            const updateBalance = await db.query('UPDATE user_account SET balance=$1 WHERE user_id=$2', [amount, userId]);
    
            if (updateBalance.rowCount === 0) {
                return res.status(404).json({ message: "User with such id does not exist" });
            }
    
            return res.status(200).json({ message: 'Balance updated successfully' });
    
        } catch (error) {
            console.error('Error updating user account balance:', error.stack);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    };