

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
    
                }else{
                    mainList[j].classList.remove('on')
                }
            }
        })
    }

});

window.addEventListener('load',function(){
    const project_box_ul = document.querySelector('#project_box_ul')
    const project_box_li = document.querySelectorAll('#project_box_ul li')
    const project_box = document.querySelectorAll('#project_box_ul .project_box img');
    const project_page = document.querySelector('#content3 .right_box .project_page_wrap');
    const page_wrap = document.querySelector('.project_page_wrap')

    for(let i =0; i < project_box_li.length; i++){

        project_box_li[i].index = i;
       
        project_box_li[i].addEventListener('click',function(e){
            console.log(project_box_li);
            console.log(project_box)
            e.preventDefault();
            nowIdx = e.currentTarget.index;
            
            for(let j = 0; j < project_box_li.length; j++){
                if(j == nowIdx){
                    console.log(project_box[j])
                    project_box_li[j].classList.add('off');
                }else if(j == 0){
                    project_box_ul.classList.remove('off');
                }else{

                }
              
                
            }
        })

    }
});