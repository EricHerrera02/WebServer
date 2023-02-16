const http = require('http')

http.createServer((req, res) =>{
    //res.writeHead(200, {'Content-Type': 'application/json'});

    // res.setHeader('Conten-Disposition', 'attachment; filename=list.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'});


    // const persona = {
    //     id:1,
    //     nombre: 'Eric'
    // }

    // res.write( JSON.stringify(persona));
    
    res.write('Hola mundo');

    // res.write('id, nombre\n');
    // res.write('1, Eric\n');
    // res.write('2, Fran\n');
    // res.write('3, Maxito\n');
    // res.write('4, Morita\n');

    res.end();
} )

.listen(8080);

console.log('Server listo en el puerto 8080')