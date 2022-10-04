window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow:2,
        slidesToScroll:4,
        draggable: true,
        dots:'.carousel__indicadores',
        arrows:{
            prev:'.carousel__anterior',
            next:'.carousel__siguiente'
        }
    });
});