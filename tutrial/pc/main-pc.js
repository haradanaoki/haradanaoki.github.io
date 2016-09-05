window.onload = function(){

  var image = document.getElementById('image');

  // app_idは自分のものに書き換えてください
  var milkcocoa = new MilkCocoa("noteisjuf7rd.mlkcca.com");
  var ds = milkcocoa.dataStore('gravity');

  ds.on('send', changeViewFromSentMode);

  function changeViewFromSentMode(sent){
    if(sent.value.mode === 'portrait'){
      image.className = '';
    }
    if(sent.value.mode === 'landscape'){
      image.className = 'is-landscape';
    }
  }
};
