const db = require('../../../db')

module.exports = {
    create(data, callback) {
        const query = `
            INSERT INTO users (name, surname, age, city, state) VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `

        const values = [
            data.name,
            data.surname,
            data.age,
            data.city,
            data.state,
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database error: ${err}`
            
            callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `
            UPDATE users SET
                name=($1), 
                surname=($2), 
                age=($3),
                city=($4),
                state=($5)
         
            WHERE id = $6
        `
        const values = [
            data.name,
            data.surname,
            data.age,
            data.city,
            data.state,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database error: ${err}`
            callback()
        })
    },
    find(id, callback) {
        db.query(`
        SELECT * FROM users WHERE id = $1
        `, [id], function(err, results) {
            if(err) throw `Database error: ${err}`
            callback(results.rows[0])
        })
    },
    delete(id) {
        db.query(`DELETE FROM users WHERE id = $1`, [id], function(err, results) {
            if(err) throw `Database error: ${err}`
            
        })
    },

}