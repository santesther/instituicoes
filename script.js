let areas = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null
  };
  
  
  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });
  
  document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
  });
  
  document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
  document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
  document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);
  
  function dragStart(e) {
    e.currentTarget.classList.add('dragging');
  } 
  function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
  }
  
  function dragOver(e) {
    let currentItems = e.currentTarget.querySelectorAll('.item').length;
    
    if (currentItems < 1) {
      e.preventDefault();
      e.currentTarget.classList.add('hover');
  
    }
  }
  function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
  }
  function drop(e) {
    e.currentTarget.classList.remove('hover');
  
    let dragItem = document.querySelector('.item.dragging');
    let areaName = e.currentTarget.getAttribute('data-name');
    let classeItem = dragItem.classList[1];
  
   if( verificaFrase(areaName, classeItem)) {
    let clonedItem = dragItem.cloneNode(true);
    clonedItem.classList.add('cloned');
    document.querySelector('.neutralArea').appendChild(clonedItem);
    e.currentTarget.appendChild(dragItem);
    dragItem.classList.add('item-escolhido');
  }
   } 
    dragItem.classList.remove('item-escolhido');
    e.currentTarget.appendChild(dragItem);
  
  function dragOverNeutral(e) {
    e.preventDefault();
     e.currentTarget.classList.add('hover');
  }
  function dragLeaveNeutral(e) {
  e.currentTarget.classList.remove('hover');
  
  }
  function dropNeutral(e) {
  e.currentTarget.classList.remove('hover');
  let dragItem = document.querySelector('.item.dragging');
  dragItem.classList.remove('item-escolhido');
  e.currentTarget.appendChild(dragItem);
  }

  function recarregarAPagina(){
    window.location.reload();
  } 

  function verificaFrase(area, classeItem) {
    const frasesPermitidas = {
      a:['frase1', 'frase2', 'frase3'],
      b:['frase1', 'frase2', 'frase3'],
      c:['frase1', 'frase2', 'frase3'],
    };
  
    if(frasesPermitidas[area].includes(classeItem)) {
      var audio1 = new Audio();
      audio1.src = "audio/aplausos.mp3";
      audio1.play();
      return true;
    } else {
      var audio2 = new Audio();
      audio2.src = "audio/bomba.mp3";
      audio2.play();
      return false;
    }
  }
  
  let dog = 0;

  function dragOver(e){
		e.preventDefault();
}
 
function drop(e){
	e.preventDefault();
	let data = e.dataTransfer.getData("data");
 
	switch(data){
		case "dog":
			dog++;
			document.getElementById('dog_count').innerHTML = dog;
		break;
		case "elephant":
			elephant++;
			document.getElementById('elephant_count').innerHTML = elephant;
		break;
		case "lion":
			lion++;
			document.getElementById('lion_count').innerHTML = lion;
		break;
	}
}
 
function drag(e){
	e.dataTransfer.setData("data", e.target.id);
}