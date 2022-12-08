const db = require('../model/config');

//get user of category
const showCategory = (req, res) => {
    db.query("SELECT * FROM category", (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

//get user of category by slug
const showCategoryBySlug = (req, res) => {
    const id = req.params.id;
    if(parseInt(id) != NaN){return res.status(400).send('Category slug should be a string')}

    db.query("SELECT * FROM category where category_slug = ?", id, (err, result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
}

//add category
const addCategory = (req, res) => {
    const {category_name, category_slug, assets_id} = req.body;

    //validation
    if (category_name == undefined){return res.status(400).send('Please input data completely - category name is missing')}
    if (category_slug == undefined){return res.status(400).send('Please input data completely - category slug is missing')}
    if (assets_id == undefined){return res.status(400).send('Please input data completely - assets id is missing')}
    
    if(category_name.length < 25){return res.status(400).send('category name not more than 25 characters')}
    if(category_slug.length < 25){return res.status(400).send('category slug not more than 25 characters')}
    if(isNaN(assets_id)){return res.status(400).send('assets id must be a number')}

    const sqlQuery = "INSERT INTO category (category_name, category_slug, asset_id) VALUES (?, ?, ?)";
    db.query(sqlQuery, [category_name, category_slug, assets_id], (err, result) => {
        if(err) throw err;
        res.status(200).json({message: 'Category added successfully'})
    })
}

//user can delete account by id
const deleteCategory = (req, res) => {
    const id = req.params.id

    //validation
    if(isNaN(id)) {return res.status(400).send('Id should be integer') }

    const sqlQuery = "DELETE FROM category WHERE id = ?";
    db.query(sqlQuery, id, (err, result) => {
        if(err) throw err;
        res.status(200).json({message: `Category with id ${id} has been deleted`});
    })
}


//update category
const updateCategory = (req, res) => {
    const id = req.params.id
    const {category_name, category_slug, assets_id} = req.body;

    if(isNaN(id)){return res.status(400).send('id must be a integer')}

    if (category_name == undefined){return res.status(400).send('Please input data completely - category name is missing')}
    if (category_slug == undefined){return res.status(400).send('Please input data completely - category slug is missing')}
    if (assets_id == undefined){return res.status(400).send('Please input data completely - asset id is missing')}
    
    if(category_name.length < 25){return res.status(400).send('category name not more than 25 characters')}
    if(category_slug.length < 25){return res.status(400).send('category slug not more than 25 characters')}
    if(isNaN(assets_id)){return res.status(400).send('assets id must be a number')}

    const sqlQuery = `UPDATE category SET category_name = ?, category_slug = ?, assets_id = ?, updated_at = current_timestamp() WHERE id = ?` 
    db.query(sqlQuery, [category_name, category_slug, assets_id, id], (err, result)=>{
        if(err) throw err;
        res.status(200).json({message: `Category with id ${id} has been updated`})
    })

}


module.exports = {showCategory, showCategoryBySlug, addCategory, deleteCategory, updateCategory}