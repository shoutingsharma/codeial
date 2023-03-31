const { constants } = require('buffer');
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./Config/mongoose')

app.use(express.static('./assests'));

app.use(expressLayouts);
//extracts style and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//use express router
app.use('/',require('./routes/index'));
//set up view engine
 app.set('view engine','ejs');
 app.set('views','./views');




app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})