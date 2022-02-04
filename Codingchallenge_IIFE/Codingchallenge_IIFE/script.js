


(function(){
  const header = document.querySelector('h1');
  header.style.color = 'red';
  console.log("hjhh");

  document.querySelector('body').addEventListener('click',function(){
    header.style.color = 'blue';
  })
})();