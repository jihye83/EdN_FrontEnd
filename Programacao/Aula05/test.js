let matriz = [
    ["Danilo", 31, "SP"],
    ["Fabio", 41, "RJ"],
    ["Joao", 23, "BH"],
  ];

  console.log(matriz.length);
  console.log(matriz[0]);
  console.log(matriz[0][0]);
  console.table(matriz);

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      console.log(matriz[i][j]);
    }
  }