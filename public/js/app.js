const bodyScroll = document.querySelector('body');
const navList = document.querySelector('.header_list')

bodyScroll.onscroll = (e)=>{

    if(window.scrollY >=50){
        navList.style.position = 'fixed'
        navList.style.left = '0'
        navList.style.right = '0'
        navList.style.top = '0'
        navList.style.zIndex = '999'
        
    }else{
        navList.style.position = ''
    }
}