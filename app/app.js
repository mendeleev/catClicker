(function() {
    var $container = $('.list ul'),
        $preview = $('#preview'),
        $template = $('<li class="item" data-index="0"></li>'),
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
            },
            {
                "name": "Pussy",
                "photo": "images/cat3.jpg",
                "clicks": 0
            },
            {
                "name": "Missi",
                "photo": "images/cat4.jpg",
                "clicks": 0
            },
            {
                "name": "Jessie",
                "photo": "images/cat5.jpg",
                "clicks": 0
            }
        ];
    
    $container.empty();       
    
    for(var i = 0; i < cats.length; i++) {
        $template.text(cats[i].name);
        $template.attr('data-index', i);
        $container.append($template.clone());
    }   
        
    $container.on('click', function(event) {
        var index = $(event.target).data('index');
        cats[index].clicks++;        
        $preview.find('img').attr('src', cats[index].photo);
        $preview.find('h4').text(cats[index].name);
        $preview.find('strong').text(cats[index].clicks);
    });
    
})();