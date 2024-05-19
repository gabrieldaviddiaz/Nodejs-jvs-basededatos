import { pool } from "../db.js"

export const getbibliotecario = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM bibliotecario')
     res.json( rows )}

export const getbibliotecarios =  async (req,res) => { 
    const [rows] = await pool.query('SELECT * FROM bibliotecario WHERE cedula = ?', [req.params.cedula])
    
    if (rows.length <= 0) return res.status(404).json ({message: 'administrador no econtrado'})

    res.json(rows[0])
}

export const createbibliotecario = async (req, res) => { 
    const {cedula,nombre,apellido ,telefono } = req.body
   const [rows] = await pool.query ('INSERT INTO bibliotecario (cedula,nombre,apellido,telefono) VALUES (?, ?, ?, ?)', [cedula, nombre , apellido, telefono]) 
    res.send({ rows })
}


export const deletebibliotecario =  async (req,res) => {
    const result = await pool.query('DELETE FROM bibliotecario WHERE cedula = ?', [req.params.cedula])
    
    if (result.affectedRows  <= 0) return res.status(404).json ({message: 'bibliotecario not foud'})
    
    res.sendStatus (204)
    }

export const updatebibliotecario = (req,res) => res.send('actualizando bibliotecario')

