const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: "api/productd",
  method: "GET",
};

const req = http.request(options, (res) => {
    if (res.statusCode === 403 || res.statusCode === 401){
        console.log("Test OK (La API protegio la ruta correctamente)");
        process.exit(0);
    } else {
        console.log("Test fallo");
        process.exit(1);
    }
});

req.on("error", () =>{
    console.log("Error de conexion");
    process.exit(1);
});

req.end();