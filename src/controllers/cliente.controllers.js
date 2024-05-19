import { pool } from "../db.js"


export const getcliente = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM cliente')
     res.json( rows )}

export const getclientes =  async (req,res) => { 
    const [rows] = await pool.query('SELECT * FROM cliente WHERE cedula = ?', [req.params.cedula])
    
    if (rows.length <= 0) return res.status(404).json ({message: 'cliente no econtrado'})

    res.json(rows[0])
}

export const createcliente = async (req, res) => { 
    const {cedula,nombre,apellido ,telefono } = req.body
   const [rows] = await pool.query ('INSERT INTO cliente (cedula,nombre,apellido,telefono) VALUES (?, ?, ?, ?)', [cedula, nombre , apellido, telefono]) 
    res.send({ rows })
}

export const deletecliente =  async (req,res) => {
    const result = await pool.query('DELETE FROM cliente WHERE cedula = ?', [req.params.cedula])
    
    if (result.affectedRows  <= 0) return res.status(404).json ({message: 'cliente not foud'})
    
    res.sendStatus (204)
    }



export const updatecliente = (req,res) => res.send('actualizando cliente')

