function newImage (path, left, bottom){
    let image = document.createElement('img')
    image.src = path
    image.style.position = 'fixed'
    image.style.left = '450px'
    image.style.bottom = '200px'
    document.body.append(image)  
    
}



let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)




newImage('assets/pine-tree.png', 450, 200)