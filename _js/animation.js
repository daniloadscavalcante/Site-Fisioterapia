
  
// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação


//é uma lib para diminuir a quantidade de vezes q a função é ativada
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


function animeScroll(){

    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);//descobrindo qual a distancia da barra do scroll ate o  topo
    target.forEach(function(element){
       if(windowTop > element.offsetTop){
        element.classList.add(animationClass);
       }else{
        element.classList.remove(animationClass); 
       }
    })
    //console.log(windowTop);//mostrando no console a distancia do scroll
   /** console.log('dajsndksa')/*mostra se esta capatando a rolagem de scroll */
}

animeScroll(); //isso garante que a função ja é ativa mesmo sem o usuario fazer nada

if(target.length){// verificando se tem elemento com target, para que window fique verificando se esta tendo scroll na pagina. 
    /*toda vez que o usuario der scroll ele ativa essa function()*/ 
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
        
}, 200));
}