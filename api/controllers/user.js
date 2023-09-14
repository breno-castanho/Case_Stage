import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios"; // q = query

    db.query(q, (err, data) => {
        if (err) return res.json(err); // err = erro
    
        return res.status(200).json(data);
    
    });

}