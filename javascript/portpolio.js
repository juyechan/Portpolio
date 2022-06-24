

window.addEventListener('load',function(){
    const navUl = document.querySelector('.main-menu-nav');
    const navList = document.querySelectorAll('.main-menu-nav a');
    const mainUl = document.querySelector('#main_slidewrap');
    const mainList = document.querySelectorAll('#main_slidewrap > li');
    

    for(let i = 0; i < navList.length; i++){
        let n = 0;
        navList[i].index = i;

        navList[i].addEventListener('click',function(e){
            e.preventDefault();
            nowIdx = e.currentTarget.index;

            for(let j = 0; j < navList.length; j++){
                if(j == nowIdx){
                    mainList[j].classList.add('on')
                    console.log(mainList[j]);
                }else{
                    mainList[j].classList.remove('on')
                }
            }
        })
    }
});