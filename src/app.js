window.onload = function() {
  let first = "Un ";
  let adj = [
    "pirado ",
    "loco ",
    "enfadado ",
    "maloliente ",
    "chiflado ",
    "maligno ",
    "perezoso ",
    "malhumorado ",
    "viejo "
  ];
  let noun = [
    "vendedor de churros ",
    "mapache con un acordeón ",
    "perro con rabia ",
    "cartero ",
    "conductor de autobus ",
    "profesor de programación ",
    "estudiante "
  ];
  let action = [
    "se llevó mi ",
    "rompió mi ",
    "se cargó mi ",
    "escondió mi ",
    "robó mi ",
    "quemó mi ",
    "se comió mi ",
    "cocinó mi "
  ];
  let possetion = [
    "teléfono ",
    "coche ",
    "mochila ",
    "zapatilla ",
    "llave de casa ",
    "bono del metro ",
    "ordenador ",
    "libro ",
    "comida ",
    "almuerzo "
  ];
  let where = [
    "en la entrada de mi casa!",
    "en el parking de la oficina!",
    "mientras esperaba para entrar al baño!",
    "en la cocina!",
    "en el parque!",
    "en el centro comercial!",
    "en la parada del autobus!"
  ];

  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
