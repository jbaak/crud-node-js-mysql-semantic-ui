module.exports={
	
	index:function(req, res, next){
		res.render('index', {title: 'Bienvenido al crud con Node JS'});
	}
}