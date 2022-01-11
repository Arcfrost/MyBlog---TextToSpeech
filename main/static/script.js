var loadingOverlay = document.querySelector('.loading');
function toggleLoading(event){
  if (event.keyCode !== 13) return;
  
  document.activeElement.blur();
  
  if (loadingOverlay.classList.contains('hidden')){
    loadingOverlay.classList.remove('hidden');
  } else {
    loadingOverlay.classList.add('hidden');
  }
}

document.addEventListener('keydown', toggleLoading);

function showAlert(){
  alert('de knop werkt!');
}

var testButton = document.getElementById('testButton');
testButton.addEventListener('click', showAlert);