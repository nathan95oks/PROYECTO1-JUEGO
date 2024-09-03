class Auto {
  constructor(x, y, orientacion, max_x, max_y) {
    this.x = x;
    this.y = y;
    this.orientacion = orientacion;
    this.max_x = max_x;
    this.max_y = max_y;
  }

  girarIzquierda() {
    const orientaciones = "NESW";
    const index = orientaciones.indexOf(this.orientacion);
    this.orientacion = orientaciones[(index - 1 + 4) % 4];
  }

  girarDerecha() {
    const orientaciones = "NESW";
    const index = orientaciones.indexOf(this.orientacion);
    this.orientacion = orientaciones[(index + 1) % 4];
  }
  
  avanzar() {
    switch (this.orientacion) {
      case 'N':
        if (this.y < this.max_y) this.y++;
        break;
      case 'S':
        if (this.y > 0) this.y--;
        break;
      case 'E':
        if (this.x < this.max_x) this.x++;
        break;
      case 'W':
        if (this.x > 0) this.x--;
        break;
    }
  }

  ejecutarComandos(comandos) {
    for (let comando of comandos) {
      if (comando === 'I') this.girarIzquierda();
      else if (comando === 'D') this.girarDerecha();
      else if (comando === 'A') this.avanzar();
    }
  }

  obtenerPosicionFinal() {
    return `${this.x},${this.y} ${this.orientacion}`;
  }
}

function simularMovimiento(cadenaComandos) {
  const [superficie, inicio, comandos] = cadenaComandos.split('/');
  const [max_x, max_y] = superficie.split(',').map(Number);
  const [x, yOrientacion] = inicio.split(',');
  const y = parseInt(yOrientacion.slice(0, -1));
  const orientacion = yOrientacion.slice(-1);

  const auto = new Auto(parseInt(x), y, orientacion, max_x, max_y);
  auto.ejecutarComandos(comandos);
  return auto.obtenerPosicionFinal();
}

module.exports = simularMovimiento;
