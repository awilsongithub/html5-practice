var d1 = document.getElementById('d1');

toggleDialogElement = () => {
  if(d1.hasAttribute('open')){
    d1.removeAttribute('open');
  } else {
    d1.setAttribute('open', true);
  }
}

increaseProgress = () => {
  var progressBar = document.getElementsByTagName('progress')[0];
  var value = progressBar.getAttribute('value');
  var int = parseInt(value);
  var int = int + 10;
  progressBar.setAttribute('value', int)
}
