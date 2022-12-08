const db = require('../model/config');

//get category assets 
const showCategoryAssets = (req, res) => {
    db.query("SELECT * FROM category_assets", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}


//add CategoryAssets
const addCategoryAssets = (req, res) => {
    const {name, path, size} = req.body;

    //validation
    if (name == undefined){return res.status(400).send('Please input data completely - name is missing')}
    if (path == undefined){return res.status(400).send('Please input data completely - path is missing')}
    if (size == undefined){return res.status(400).send('Please input data completely - size is missing')}
    
    if(name.length < 25){return res.status(400).send('name not more than 25 characters')}
    if(path.length < 255){return res.status(400).send('path not more than 255 characters')}
    if(isNaN(size)){return res.status(400).send('size must be a number')}
    
    const sqlQuery = "INSERT INTO category_assets (name, path, size) VALUES (?, ?, ?)";
    db.query(sqlQuery, [name, path, size], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Category assets added successfully'})
    })
}

//user can delete category assets by id
const deleteCategoryAssets = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "DELETE FROM category_assets WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Category assets with id ${id} has been deleted`});
    })
}


//update products
const updateCategoryAssets = (req, res) => {
    const id = req.params.id
    const {name, path, size} = req.body;

    if(isNaN(id)){return res.status(400).send('id must be a integer')}

    //validation
    if (name == undefined){return res.status(400).send('Please input data completely - name is missing')}
    if (path == undefined){return res.status(400).send('Please input data completely - path is missing')}
    if (size == undefined){return res.status(400).send('Please input data completely - size is missing')}
    
    if(name.length < 25){return res.status(400).send('name not more than 25 characters')}
    if(path.length < 255){return res.status(400).send('path not more than 255 characters')}
    if(isNaN(size)){return res.status(400).send('size must be a number')}
        
    const sqlQuery = `UPDATE category_assets SET name = ?, path = ?, size = ?, updated_at = current_timestamp() WHERE id = ?` 
    db.query(sqlQuery, [name, path, size, id], (err, result)=>{
        if(err) throw err;
        res.status(200).json({message: `Category assets with id ${id} has been updated`})
    })

}


module.exports = {showCategoryAssets, addCategoryAssets, deleteCategoryAssets, updateCategoryAssets}