export class NumberBuffer {
  next(min: number, max: number) {
    if (this._bufferMax !== max || !this._buffer.length) {
      let buffer: number[] = [];
      for (let i = min; i <= max; i++) buffer.push(i);
      for (let i = buffer.length - 1; i >= 1; i--) {
        let j = Math.floor(Math.random() * i);
        let a = buffer[i]!;
        buffer[i] = buffer[j]!;
        buffer[j] = a;
      }
      this._buffer = buffer;
      this._bufferMax = max;
    }
    return this._buffer.shift()!;
  }

  private _buffer: number[] = [];
  private _bufferMax = 0;
}
