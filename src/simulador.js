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
  }
}

module.exports={Auto};