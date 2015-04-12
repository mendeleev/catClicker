(function() {
    var $container = $('#container'),
        $template = $('#template').clone(),
        cats = [
            {
                "name": "Tom",
                "photo": "images/cat1.jpg",
                "clicks": 0
            }, 
            {
                "name": "Kitti",
                "photo": "images/cat2.jpg",
                "clicks": 0
            }
        ];
    
    $container.empty();    
    
    for(var i = 0; i < cats.length; i++) {
        $template.find('img').attr('src', cats[i].photo);
        $template.find('.name').text(cats[i].name);
        $template.find('.counter strong').text(cats[i].clicks);
        $container.append($template.clone());
    }
    
    $container.on('click', function(event) {
        var counts = $(event.target).parent().find('.counter strong').text();        
        $(event.target).parent().find('.counter strong').text(++counts);
    });
    
})();