<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Factura de Pago</h1>
    <p>Su correo con los datos de la funcion</p>
    <p> {{ QrCode::size(150)->generate('Asientos: A5 A6 A7') }} </p>
</body>
</html>
