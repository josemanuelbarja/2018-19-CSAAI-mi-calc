function main() {
  console.log("hola, funcion principal");

  var gui = {
    display: document.getElementById('display'),
    b1: document.getElementById('b1'),
    b2: document.getElementById('b2'),
    b3: document.getElementById('b3'),
    b4: document.getElementById('b4'),
    b5: document.getElementById('b5'),
    b6: document.getElementById('b6'),
    b7: document.getElementById('b7'),
    b8: document.getElementById('b8'),
    b9: document.getElementById('b9'),
    b0: document.getElementById('b0'),
    bclear: document.getElementById('bclear'),
    bchange: document.getElementById('bchange'),
    opdiv: document.getElementById('opdiv'),
    opmult: document.getElementById('opmult'),
    opres: document.getElementById('opres'),
    opsum: document.getElementById('opsum'),
    bcoma: document.getElementById('bcoma'),
    bequal: document.getElementById('bequal')
  }

  var operab = {
    status: null,
    value1: 0,
    value2: 0,
    oper: null,
    result: null,
    clear: function (val) {
      gui.display.textContent = val;
    },
    reset: function (val) {
      this.clear(val);
      this.value1 = 0;
      this.value2 = 0;
      this.oper = null;
      this.result = null;
    },
    verify: function () {
      if(gui.display.textContent == 0){
        this.clear(null);
      }
    },
    divide: function () {
      this.value1 = gui.display.textContent;
      this.oper = gui.opdiv.innerHTML;
      this.clear(0);
    },
    multiply: function () {
      this.value1 = gui.display.textContent;
      this.oper = gui.opmult.innerHTML;
      this.clear(0);
    },
    restar: function () {
      this.value1 = gui.display.textContent;
      this.oper = gui.opres.innerHTML;
      this.clear(0);
    },
    sumar: function () {
      this.value1 = gui.display.textContent;
      this.oper = gui.opsum.innerHTML;
      this.clear(0);
    },
    result: function () {
      this.value2 = gui.display.textContent;
      switch (this.oper) {
        case "+":
          this.result = parseFloat(this.value1) + parseFloat(this.value2);
          break;
        case "-":
          this.result = parseFloat(this.value1) - parseFloat(this.value2);
          break;
        case "/":
          this.result = parseFloat(this.value1) / parseFloat(this.value2);
          break;
        case "x":
          this.result = parseFloat(this.value1) * parseFloat(this.value2);
          break;
      }
      this.clear(this.result)
    }
  }

  gui.b1.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b1.innerHTML;
  }
  gui.b2.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b2.innerHTML;
  }
  gui.b3.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b3.innerHTML;
  }
  gui.b4.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b4.innerHTML;
  }
  gui.b5.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b5.innerHTML;
  }
  gui.b6.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b6.innerHTML;
  }
  gui.b7.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b7.innerHTML;
  }
  gui.b8.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b8.innerHTML;
  }
  gui.b9.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b9.innerHTML;
  }
  gui.b0.onclick = () => {
    operab.verify();
    gui.display.textContent = gui.display.textContent + gui.b0.innerHTML;
  }
  gui.bcoma.onclick = () => {
    gui.display.textContent = gui.display.textContent + gui.bcoma.innerHTML;
  }
  gui.bclear.onclick = () => {
    operab.reset(0);
  }
  gui.bchange.onclick = () => {
    operab.change();
  }
  gui.opdiv.onclick = () => {
    gui.display.textContent = gui.display.textContent + gui.opdiv.innerHTML;
    operab.divide();
  }
  gui.opmult.onclick = () => {
    gui.display.textContent = gui.display.textContent + gui.opmult.innerHTML;
    operab.multiply();
  }
  gui.opres.onclick = () => {
    gui.display.textContent = gui.display.textContent + gui.opres.innerHTML;
    operab.restar();
  }
  gui.opsum.onclick = () => {
    gui.display.textContent = gui.display.textContent + gui.opsum.innerHTML;
    operab.sumar();
  }
  gui.bequal.onclick = () => {
    operab.result();
  }

}
