function myFunction () {
  var  copyText = document.getElementById("myInput");
  copyText.select();

  navigator.clipboard.writeText(copyText.value);

  alert("Kopyalanan metin: " + copyText.value)
}

function resetContext(){
  document.getElementById('myInput').value = '';
}