Queremos visualizar fácilmente las propiedades y valores de nuestros productos con el siguiente formato: `"producto[PROPIEDAD] -> VALOR"`. Para ello definiremos una función que se comporte de la siguiente forma: 

```javascript
ム let producto = {
  id: "UMA-020",
  titulo: "Gubergren sed est amet voluptua",
  precio: 123.75,
  imagen:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
  condicion: "nuevo",
  envioGratis: true,
  ubicacion: "Medellín",
};

ム obtenerPropiedadesYValores(producto)
`
producto['id'] -> UMA-020
producto['titulo'] -> Gubergren sed est amet voluptua
producto['precio'] -> 123.75
producto['imagen'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
producto['condicion'] -> nuevo
producto['envioGratis'] -> true
producto['ubicacion'] -> Medellín
`
```

> Definí la función `obtenerPropiedadesYValores`.