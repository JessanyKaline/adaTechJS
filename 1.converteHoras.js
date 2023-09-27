function converteHora(horaParaConversao) {
  const [tempo, amPm] = horaParaConversao.split(' ');
  
  if (!amPm) {
    modificacao = 'AM';
  }

  let [hora, minutos, segundos] = tempo.split(':');

  if (hora === '12') {
    hora = '00';
  }
  
  if (amPm === 'PM') {
    hora = parseInt(hora, 10) + 12;
  }
  
  return `${hora}:${minutos}:${segundos}`;
}

const horaParaConversao = '06:15:25 PM';

console.log(converteHora(horaParaConversao));


