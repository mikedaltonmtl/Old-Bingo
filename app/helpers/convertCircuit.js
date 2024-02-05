const convertCircuitToInteger = function(circuit) {
  let number;
  switch (circuit.toUpperCase()) {
  case "INTRO":
    number = 1;
    break;
  case 1:
    number = 2;
    break;
  case 2.1:
    number = 3;
    break;
  case 2.2:
    number = 4;
    break;
  case 2.3:
    number = 5;
    break;
  case 3.1:
    number = 6;
    break;
  case 3.2:
    number = 7;
    break;
  case 3.3:
    number = 8;
    break;
  case 4.1:
    number = 9;
    break;
  case 4.2:
    number = 10;
    break;
  case 4.3:
    number = 11;
    break;
  case 5.1:
    number = 12;
    break;
  case 5.2:
    number = 13;
    break;
  case 5.3:
    number = 14;
    break;
  case 6.1:
    number = 15;
    break;
  case 6.2:
    number = 16;
    break;
  case 6.3:
    number = 17;
    break;
  case "COMPE":
    number = 18;
    break;
  }
  return number;
};

const convertIntegerToCircuit = function(number) {
  let circuit;
  switch (number) {
  case 1:
    circuit = "INTRO";
    break;
  case 2:
    circuit = 1;
    break;
  case 3:
    circuit = 2.1;
    break;
  case 4:
    circuit = 2.2;
    break;
  case 5:
    circuit = 2.3;
    break;
  case 6:
    circuit = 3.1;
    break;
  case 7:
    circuit = 3.2;
    break;
  case 8:
    circuit = 3.3;
    break;
  case 9:
    circuit = 4.1;
    break;
  case 10:
    circuit = 4.2;
    break;
  case 11:
    circuit = 4.3;
    break;
  case 12:
    circuit = 5.1;
    break;
  case 13:
    circuit = 5.2;
    break;
  case 14:
    circuit = 5.3;
    break;
  case 15:
    circuit = 6.1;
    break;
  case 16:
    circuit = 6.2;
    break;
  case 17:
    circuit = 6.3;
    break;
  case 18:
    circuit = "COMPE";
    break;
  }
  return circuit;
};

module.exports = { convertCircuitToInteger, convertIntegerToCircuit };