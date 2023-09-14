/* BIBLIOTECAS */

import promptSync, { Prompt } from 'prompt-sync'; const prompt: Prompt = promptSync();

/* CÓDIGO */

const numeroSorteado: number = Math.floor(Math.random() * 10) + 1;
let achouNumero: boolean = false;

while (!achouNumero) {
  const numeroDigitado: number = Number(prompt('Digite um número de 1 a 10: '));

  if (numeroDigitado == numeroSorteado) {
    console.log('Acertou!');
    achouNumero = true;
  } else {
    console.log('Errou! Tente novamente.');
  }

  let x: number = 10;
}

console.log('Tchau!!');