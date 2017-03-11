var mysql = require('mysql');

module.exports={
    getProductos:function(req, res, next){
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

         var productos=null;

        db.query('select * from productos', function(err, rows, fields){
            if(err) throw err;
            productos =rows;
            db.end();
            res.render('productos/productos', {productos: productos});
        });
    },
    getNuevoProducto: function(req, res, next){
        res.render('productos/nuevo');
    },
    postNuevoProducto: function(req, res, next){
        console.log(req.body);
    },

}