var mysql = require('mysql');
var dateFormat = require('dateformat');

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
        //console.log(req.body);
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');

        var producto= {
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            fecha_creacion: fecha
        }

        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('insert into productos set ?', producto, function(err, rows, fields){
            if(err) throw err;
            db.end();
        });

        res.render('productos/nuevo', {info: 'Producto creado correctamente'});
    },

}