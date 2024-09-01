export class Auto {
  constructor(x, y, orientacion, max_x, max_y) {
      this.x = x;
      this.y = y;
      this.orientacion = orientacion;
      this.max_x = max_x;
      this.max_y = max_y;
  }

  avanzar() {
      if (this.orientacion === 'N' && this.y < this.max_y) this.y++;
      // Agrega lógica para otras orientaciones si es necesario
  }

  girar(direccion) {
      const orientaciones = ['N', 'E', 'S', 'O']; // Norte, Este, Sur, Oeste
      let index = orientaciones.indexOf(this.orientacion);
      if (direccion === 'I') index = (index - 1 + 4) % 4;
      if (direccion === 'D') index = (index + 1) % 4;
      this.orientacion = orientaciones[index];
  }
}
