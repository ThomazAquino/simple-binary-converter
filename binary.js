const binaryEl = document.querySelector('.binary-input');
const decimalEl = document.querySelector('.decimal-input');

class convertion {
  constructor() {
    this._binaryEl = document.querySelector('.binary-input');
    this._decimalEl = document.querySelector('.decimal-input');
    this._inputWrapperEl = document.querySelector('.input-wrapper')
    this._target = 'binary';
  }

  convert() {
    if (this._target == 'binary') {
      this.convertBinaryToDecimal()
    } else if (this._target == 'decimal') {
      this.convertDecimalToBinary();
    }
  }


  convertBinaryToDecimal(){
    let binArray = this._binaryEl.value.split('');
    let decimalNumber = 0;

    for (let index = 0; index < binArray.length; index++) {
      if (binArray[(binArray.length - 1) - index] == 1) {
        decimalNumber = decimalNumber + Math.pow(2, index);
      }
    }

    this._decimalEl.value = decimalNumber;
  }

  convertDecimalToBinary() {
    let decimal = parseInt(this._decimalEl.value);
    let binary= [];

    while (decimal >= 0.5) {
      decimal % 2 > 0 ? binary.unshift('1') : binary.unshift('0');
      decimal = Math.floor(decimal/2);
    }

    this._binaryEl.value = binary.join().replace(/,/g, '');
  }

  invert() {
    this._inputWrapperEl.classList.toggle('input-wrapper-switch');
    this._target = this._target == 'binary' ? 'decimal' : 'binary';
  }
}

let convert = new convertion();