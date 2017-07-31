$(function () {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
        // options...
        itemSelector: '.grid-item',
        gutter: 20,
        fitWidth: true
        
    });
});

