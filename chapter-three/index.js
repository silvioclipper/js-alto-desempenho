
(function tableInnerHtml () {
    let i = 1
    const h = ['<table border="1" width="100%">']
    
    h.push('<thead>')
    h.push('<tr><th>id<\/th><th>yes?<\/th><th>name<\/th><th>url<\/th><th>action<\/th>')
    h.push('<\/thead>')
    h.push('<tbody>')
    
    for(i=1;i<=1000;i++){
        h.push('<tr><td>')
        h.push(i)
        h.push('<\/td><td>')
        h.push('And answer is...' + (i % 2 ? 'yes' : 'no'))
        h.push('<\/td><td>')
        h.push('my name is #' + i) 
        h.push('<\/td><td>')
        h.push('<a href="http://example.org/' +  i + '.html">http://example.org/' + i + '.html<\/a>')
        h.push('<\/td><td>')
        h.push('<ul>')
        h.push('<li><a href="edit.php?id=' + i + '">Edit</a></li>')
        h.push('<li><a href="edit.php?id=' + i + '-id001">Delete</a></li>')
        h.push('</ul>')
        h.push('</td>')
        h.push('</tr>')
    }
    
    h.push('<\/thead>')
    h.push('<tbody>')
    console.log(h)
    
    document.getElementById('here').innerHTML = h.join('')
})()