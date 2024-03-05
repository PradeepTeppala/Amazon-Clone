const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelectorAll('.header-slider ul img');
const next_btn= document.querySelectorAll('.header-slider ul img');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].computedStyleMap.display = 'none';
        
    }
}
changeSlide();