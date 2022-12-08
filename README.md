# Case Study
This is a service that handles the catalog of products and category. In this app a could register itself/create an category, products, assets and remove its data/delete its category, products, assets. A user could add, delete, and update category, products, assets in this service. Also can get the list of category, products, assets.

## Architecture Diagram Case Study
This is a architecture diagram of Case Study.

![Architecture Diagram Case Study](https://drive.google.com/file/d/1Bd8IReb4LghJzxKFfQBDNEbdmTxvF3X4/view?usp=share_link)

## Postman Documentation Case Study

Postman Documentation - https://api.postman.com/collections/23537085-abda83fa-6a9c-4ef1-a89e-d79c42b731b4?access_key=PMAT-01GKSXCW6NSA1V4VWZV588JXEP

## List of API

These are the list of API /products
```
[GET] /products -> to get all products

[GET] /products/{id} -> to get products by slug

[POST] /products -> to create a new products

[DEL] /products/{id} -> to delete products by id

[PUT] /products -> to change a products
```



These are the list of API /category
```
[GET] /category -> to get all category

[GET] /category/{id} -> to get category by slug

[POST] /category -> to create a new category

[DEL] /category/{id} -> to delete category by id

[PUT] /category -> to change a category
```


These are the list of API /assets
```
[GET] /assets/category -> to get all category assets

[GET] /assets/category/{id} -> to get category assets by slug

[POST] /assets/category -> to create a new category assets

[DEL] /assets/category/{id} -> to delete category assets by id

[PUT] /assets/category -> to change a category assets


[GET] /assets/products -> to get all products assets

[GET] /assets/products/{id} -> to get products assets by slug

[POST] /assets/products -> to create a new products assets

[DEL] /assets/products/{id} -> to delete products assets by id

[PUT] /assets/products -> to change a products assets
```
