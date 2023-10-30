<h1> Creating Nodejs App</h1>
<p>Api App where we perform actions: </p> <br/>
<ul>
<li>Get Request for All</li>
<li>Get Request by Id</li>
<li> Post request</li>
<li> Put request</li>
<li> delete request</li>
</ul>

|setup Steps: 

1. npm init -y
2. npm i mongoose express body-parser
```ruby
 Clone from github 
 1. copy url from repository.
 2. clone app
 3. npm install 
 4. update MongoUri to yours
 ```
* <em> Folder Structure</em>
1. App.js contains the Routes and Port number.
2. Database Folder: <br/>
   1. Schema.js file contains the schema modal
   2. config. file contains the configuration of connect mongodb to nodejs app
3. Store Folder: <br/>
    > having ApiStore.js files where all api are written and also express app define and declared here.







` endpoint  of Api  `

` for  get all request : localhost:3000/books  `

` for  get by Id request : localhost:3000/books/:id  `

` for  post request : localhost:3000/books  `

` for  update request : localhost:3000/books/:id  `

` for  delete request : localhost:3000/books/:id  `