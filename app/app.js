(function() {
    var data = [
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
    
    var model = {
        get: function() {
            return data;
        },
        getItem: function(index) {
            return data[index];
        },
        setItem: function(index, item) {
            data[index] = item;
            return true;
        },
        addItem: function(item) {
            data.push(item);
            return true;
        }
    };
    
    var octopus = {
        currentCat: {},
        currentIndex: 0,        
        /*returns a cat list*/
        getAllCats: function() {
            return model.get();
        },
        /*returns a cat info*/
        getCat: function() {
            this.currentCat = model.getItem(this.currentIndex);
            return this.currentCat;
        },
        /*increase a clicks number*/
        click: function() {
            this.currentCat.clicks++;
            model.setItem(this.currentCat);
        }
    };
    
    var listView = {
        init: function() {
            this.render();
            this.events();
        },
        render: function() {
            var $list = $('#container .list ul'),
                data = octopus.getAllCats();
            /*clean list*/
            $list.empty();
            /*printing a list*/
            for(var i = 0; i < data.length; i++) {
                $list.append($('<li>'+data[i].name+'</li>').attr('data-index', i));
            }
        },
        events: function() {
            $('#container .list').on('click', function(event) {
                octopus.currentIndex = $(event.target).data('index');
                imageView.render();
            }.bind(this));
        }
    };
    
    var imageView = {
        init: function() {
            this.render();
            this.events();
        },
        render: function() {
            var $preview = $('#preview'),
                data = octopus.getCat();           
            
            /*printing a preview block*/
            $preview.find('.photo').attr('src', data.photo);
            $preview.find('.name').text(data.name);
            $preview.find('.clicks').text(data.clicks);
        },
        events: function() {
            $('#preview img').on('click', function(event) {                
                octopus.click();
                this.render();
            }.bind(this));
        }
    };    
    
    listView.init();
    imageView.init();
    
})();