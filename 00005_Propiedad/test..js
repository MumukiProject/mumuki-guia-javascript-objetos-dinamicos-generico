describe("", function() {
  it("Si el perfil tiene un email, y hacemos tienePropiedad(perfil, 'email') retorna true", function() {
    let perfil = {
      nombreDeCuenta: "clara_gomez",
      contrasenia: "1234567890!",
      email: 'clara_gomez@gmail.com'
    };

    assert(tienePropiedad(perfil, 'email'))
  })
})

describe("", function() {
  it("Si el perfil tiene una contrasenia, y hacemos tienePropiedad(perfil, 'contrasenia') retorna true", function() {
    let perfil = {
      nombreDeCuenta: "clara_gomez",
      contrasenia: "1234567890!",
      email: 'clara_gomez@gmail.com'
    };

    assert(tienePropiedad(perfil, 'contrasenia'))
  })
})

describe("", function() {
  it("Si el perfil no tiene un id, y hacemos tienePropiedad(perfil, id) retorna false", function() {
    let perfil = {
      nombreDeCuenta: "clara_gomez",
      contrasenia: "1234567890!",
      email: 'clara_gomez@gmail.com'
    };

    assert(!tienePropiedad(perfil, 'id'))
  })
})

describe("", function() {
  it("Si el perfil no tiene un número de teléfono, y hacemos tienePropiedad(perfil, 'telefono') retorna false", function() {
    let perfil = {
      nombreDeCuenta: "clara_gomez",
      contrasenia: "1234567890!",
      email: 'clara_gomez@gmail.com'
    };

    assert(!tienePropiedad(perfil, 'telefono'))
  })
})