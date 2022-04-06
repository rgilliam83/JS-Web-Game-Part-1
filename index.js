function newImage (path, left, bottom){
    let image = document.createElement('img')
    image.src = path
    image.style.position = 'fixed'
    image.style.left = '450px'
    image.style.bottom = '200px'
    document.body.append(image)  
    
}


newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
