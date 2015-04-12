(function() {
    var cat = document.getElementById('cat'),
        counter = document.getElementById('counter');
    
    cat.addEventListener('click', function(event) {
        counter.innerHTML++;
    });
})();