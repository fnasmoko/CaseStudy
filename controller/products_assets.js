const db = require('../model/config');

//get products assets 
const showProductsAssets = (req, res) => {
    db.query("SELECT * FROM products_assets", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}


//add products assets
const addProductsAssets = (req, res) => {
    const {assets_id, products_id} = req.body;

    //validation
    if (assets_id == undefined){return res.status(400).send('Please input data completely - assets id is missing')}
    if (products_id == undefined){return res.status(400).send('Please input data completely - product id is missing')}
    
    if(assets_id.length <= 11){return res.status(400).send('asset id not more than 11 characters')}
    if(products_id.length <= 11){return res.status(400).send('products id not more than 11 characters')}

    if(isNaN(size)){return res.status(400).send('size must be a number')}
    if(isNaN(size)){return res.status(400).send('size must be a number')}
    
    const sqlQuery = "INSERT INTO products_assets (assets_id, products_id) VALUES (?, ?)";
    db.query(sqlQuery, [assets_id, products_id], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Products assets added successfully'})
    })
}

//user can delete products assets by id
const deleteProductsAssets = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "DELETE FROM products_assets WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Products assets with id ${id} has been deleted`});
    })
}


//update products assets
const updateProductsAssets = (req, res) => {
    const id = req.params.id
    const {assets_id, products_id} = req.body;

    if(isNaN(id)){return res.status(400).send('id must be a integer')}

    //validation
    if (assets_id == undefined){return res.status(400).send('Please input data completely - assets id is missing')}
    if (products_id == undefined){return res.status(400).send('Please input data completely - product id is missing')}
    
    if(assets_id.length <= 11){return res.status(400).send('assets id not more than 11 characters')}
    if(products_id.length <= 11){return res.status(400).send('products id not more than 11 characters')}

    if(isNaN(size)){return res.status(400).send('size must be a number')}
    if(isNaN(size)){return res.status(400).send('size must be a number')}
        
    const sqlQuery = `UPDATE products_assets SET name = ?, path = ?, size = ?, updated_at = current_timestamp() WHERE id = ?` 
    db.query(sqlQuery, [assets_id, products_id, id], (err, result)=>{
        if(err) throw err;
        res.status(200).json({message: `Products assets with id ${id} has been updated`})
    })

}


module.exports = {showProductsAssets, addProductsAssets, deleteProductsAssets, updateProductsAssets}