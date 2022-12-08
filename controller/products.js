const db = require('../model/config');

//get user of products
const showProducts = (req, res) => {
    db.query("SELECT * FROM category", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

//get user of products
const showProductsBySlug = (req, res) => {
    const id = req.params.id;
    if(parseInt(id) != NaN){return res.status(400).send('Products slug should be a string')}

    db.query("SELECT * FROM products where category_slug = ?", id, (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

//add category
const addProducts = (req, res) => {
    const {products_name, products_slug, price, description} = req.body;

    //validation
    if (products_name == undefined){return res.status(400).send('Please input data completely - products name is missing')}
    if (products_slug == undefined){return res.status(400).send('Please input data completely - products slug is missing')}
    if (price == undefined){return res.status(400).send('Please input data completely - price is missing')}
    if (description == undefined){return res.status(400).send('Please input data completely - description id is missing')}
    
    if(products_name.length < 25){return res.status(400).send('category name not more than 25 characters')}
    if(products_slug.length < 25){return res.status(400).send('category slug not more than 25 characters')}
    if(isNaN(price)){return res.status(400).send('price must be a number')}
    if(description.length < 255){return res.status(400).send('description slug not more than 25 characters')}
    
    const sqlQuery = "INSERT INTO products (products_name, products_slug, price, description) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [products_name, products_slug, price, description], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Products added successfully'})
    })
}

//user can delete products by id
const deleteProducts = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "DELETE FROM products WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Products with id ${id} has been deleted`});
    })
}


//update products
const updateProducts = (req, res) => {
    const id = req.params.id
    const {products_name, products_slug, price, description} = req.body;

    if(isNaN(id)){return res.status(400).send('id must be a integer')}

    if (products_name == undefined){return res.status(400).send('Please input data completely - products name is missing')}
    if (products_slug == undefined){return res.status(400).send('Please input data completely - products slug is missing')}
    if (price == undefined){return res.status(400).send('Please input data completely - price is missing')}
    if (description == undefined){return res.status(400).send('Please input data completely - description id is missing')}
    
    if(products_name.length < 25){return res.status(400).send('category name not more than 25 characters')}
    if(products_slug.length < 25){return res.status(400).send('category slug not more than 25 characters')}
    if(isNaN(price)){return res.status(400).send('price must be a number')}
    if(description.length < 255){return res.status(400).send('description slug not more than 25 characters')}
    
    const sqlQuery = `UPDATE products SET products_name = ?, products_slug = ?, price = ?, description = ?, updated_at = current_timestamp() WHERE id = ?` 
    db.query(sqlQuery, [products_name, products_slug, price, description, id], (err, result)=>{
        if(err) throw err;
        res.status(200).json({message: `Category with id ${id} has been updated`})
    })

}


module.exports = {showProducts, showProductsBySlug, addProducts, deleteProducts, updateProducts}