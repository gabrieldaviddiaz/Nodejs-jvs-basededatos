import { pool } from "../db.js"


export const getlibros = async(req,res) => {
    const [rows] = await pool.query('SELECT * FROM libros')
     res.json( rows )}

export const getlibro =  async (req,res) => { 
    const [rows] = await pool.query('SELECT * FROM libros WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0) return res.status(404).json ({message: 'libro no econtrado'})

    res.json(rows[0])
}

export const createlibros = async (req, res) => { 
    const {nombre,descripcion} = req.body
     const [rows] = await pool.query ('INSERT INTO libros (nombre,descripcion) VALUES (?, ?)', [nombre, descripcion]) 
    res.send({ 
        id: rows.insertId,
        nombre,
        descripcion,
    })
}

export const deletelibros =  async (req,res) => {
const result = await pool.query('DELETE FROM libros WHERE id = ?', [req.params.id])

if (result.affectedRows  <= 0) return res.status(404).json ({message: 'libro not foud'})

res.sendStatus (204)
}

export const updatelibros = (req,res) => res.send('actualizando libros')

