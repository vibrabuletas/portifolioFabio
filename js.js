let nav = document.getElementById('nav');
let menu = document.getElementById('menu');

window.onresize = () => {
    if(window.innerWidth < 900){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    };
}

function ham(){
    if(nav.style.display == 'none'){
        nav.style.display = 'flex';
    }else{
        nav.style.display = 'none';
    }
};


