$(function(){
    function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    var t = document.querySelectorAll('.innerBox > span')
    var t_Total = t.length;

    for(i = 0;i <= t_Total;i++){
        t[i].style.animationDuration = getRandom(1,10) + 's';
        t[i].style.top = getRandom(-500,500) + 'px';
        t[i].style.left = getRandom(300,500) + 'px';
        t[i].style.width = getRandom(10,30) + 'px';
        t[i].style.height = getRandom(10,30) + 'px';

        console.log(i);

        setTimeout(function(){
            $(t).fadeOut('500');
        },3500);
    }
})

$(function(){
    var tmax_optionsGlobal = {
        repeat: 0,
        repeatDelay: 0.65,
        delay: 2.8
    };
      
    CSSPlugin.useSVGTransformAttr = true;
    
    var tl = new TimelineMax(tmax_optionsGlobal),
        path = 'svg *',
        stagger_val = 0.0125,
        duration = 1.5;
    
    $.each($(path), function(i, el) {
        tl.set($(this), {
            x: '+=' + getRandom(-1000, 0),
            y: '+=' + getRandom(200, 0),
            rotation: '+=' + getRandom(-720, 720),
            scale: 0,
            opacity: 0
        });
    });
    
    var stagger_opts_to = {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: Power4.easeInOut
    };
    
    tl.staggerTo(path, duration, stagger_opts_to, stagger_val);
    
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
})