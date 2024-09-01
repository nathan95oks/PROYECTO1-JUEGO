class Auto {
  constructor(x, y, orientacion, max_x, max_y) {
      this.x = x;
      this.y = y;
      this.orientacion = orientacion;
      this.max_x = max_x;
      this.max_y = max_y;
  }

  avanzar() {
      if (this.orientacion === 'N' && this.y < this.max_y) this.y++;
      if (this.orientacion === 'E' && this.x < this.max_x) this.x++;
      if (this.orientacion === 'S' && this.y > 0) this.y--;
      if (this.orientacion === 'O' && this.x > 0) this.x--;
  }
}

module.exports = { Auto };
