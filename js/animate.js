Visibility.onVisible(function(){
    // Index
    setTimeout(function(){
        $(".mdl-layout__content h1").addClass("animated fadeInDown");
    }, 300);

    setTimeout(function(){
        $(".mdl-layout__content p.subtitle").addClass("animated fadeInDown");
    }, 800);

    setTimeout(function(){
        $(".mdl-layout__content .mdl-card").addClass("animated fadeInDown");
    }, 1200);
});
