console.log('JIZZ');

document.addEventListener("DOMContentLoaded",function(){
  //
  function addItem(name){
    console.log(name);
    var target = document.getElementById('checklist');
    
    var item = document.createElement('div');
    item.className = 'item';
    
    var itemText = document.createTextNode(name);
    
    item.appendChild(itemText);
    
    item.addEventListener('click',function(){
      console.log('??');
      console.log(this.textDecoration);
      if(this.style.textDecoration === 'line-through'){
        this.style.textDecoration = '';
      }
      else{
        this.style.textDecoration = 'line-through';
      }
    });
    
    target.insertBefore(item,target.childNodes[0]);
  }
  
  var text = document.getElementById('text');
  text.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
      console.log('enter!!');
      
      addItem(text.value);
      text.value = '';
    }
  });

  

});

//var c = document.createElement()

//var m = document.getElementById('main');

//m.addEventListener('click', function(){
//  m.style.color='#1927f9'
//});
