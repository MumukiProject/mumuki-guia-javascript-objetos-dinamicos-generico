describe("", function() {
  it("Si hacemos obtenerPropiedadesYValores(producto) retorna 'producto[id] -> UMA-020\nproducto[titulo] -> Gubergren sed est amet voluptua\nproducto[precio] -> 123.75\nproducto[imagen] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg\nproducto[condicion] -> nuevo\nproducto[envioGratis] -> true\nproducto[ubicacion] -> Medellín\n' ", function() {
    let producto = {
      id: "UMA-020",
      titulo: "Gubergren sed est amet voluptua",
      precio: 123.75,
      imagen:
        "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
      condicion: "nuevo",
      envioGratis: true,
      ubicacion: "Medellín",
    };
    let resultado = "producto[id] -> UMA-020\nproducto[titulo] -> Gubergren sed est amet voluptua\nproducto[precio] -> 123.75\nproducto[imagen] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg\nproducto[condicion] -> nuevo\nproducto[envioGratis] -> true\nproducto[ubicacion] -> Medellín\n"
    assert.equal(obtenerPropiedadesYValores(producto), resultado)
  })
})

describe("", function() {
  it("Si hacemos obtenerPropiedadesYValores(producto2) retorna 'producto[id] -> UMA-011\nproducto[titulo] -> EL mejor libro de Frontend\nproducto[precio] -> 144.88\nproducto[condicion] -> nuevo\nproducto[envioGratis] -> false\nproducto[ubicacion] -> Buenos Aires\n' ", function() {
    let producto2 = {
      id: "UMA-011",
      titulo: "EL mejor libro de Frontend",
      precio: 144.88,
      condicion: "nuevo",
      envioGratis: false,
      ubicacion: "Buenos Aires",
    };
    let resultado = "producto[id] -> UMA-011\nproducto[titulo] -> EL mejor libro de Frontend\nproducto[precio] -> 144.88\nproducto[condicion] -> nuevo\nproducto[envioGratis] -> false\nproducto[ubicacion] -> Buenos Aires\n"
    assert.equal(obtenerPropiedadesYValores(producto2), resultado)
  })
})