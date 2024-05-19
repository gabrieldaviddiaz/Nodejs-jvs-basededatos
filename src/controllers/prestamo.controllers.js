import { pool } from "../db.js"

export const getprestamo = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM prestamo')
     res.json( rows )}

export const getprestamos =  async (req,res) => { 
    const [rows] = await pool.query('SELECT * FROM prestamo WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0) return res.status(404).json ({message: 'prestamo no econtrado'})

    res.json(rows[0])
}

export const createprestamo = async (req, res) => { 
    const {usuario,tiempo} = req.body
     const [rows] = await pool.query ('INSERT INTO prestamo (usuario,tiempo) VALUES (?, ?)', [usuario, tiempo]) 
    res.send({ 
        id: rows.insertId,
        usuario,
        tiempo,
    }) }

    export const deleteprestamo =  async (req,res) => {
        const result = await pool.query('DELETE FROM prestamo WHERE id = ?', [req.params.id])
        
        if (result.affectedRows  <= 0) return res.status(404).json ({message: 'prestamo not foud'})
        
        res.sendStatus (204)
        }
    

export const updateprestamo = (req,res) => res.send('actualizando prestamo')

