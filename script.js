/*
JS Exercises
EX11) Write a function to add a new link into the navbar
 */

function navLink(){
    const navbar = document.querySelector('nav')
    console.log(navbar);
    /* const newLink = document.createElement('a') */
    navbar.innerHTML += `<a class="p-2 text-muted" href="#">New Link</a>`
}
/* navLink() */

/* EX12) Write a function to change the color of the main title */


function titleColor(){
    const title = document.querySelector('h1')
    title.style.color = 'pink'
}
/* titleColor() */

/* EX13) Write a function to change the background of the jumbotron */

function jumboBack(){
    const jumbotron = document.querySelector('.jumbotron')
    console.log(jumbotron);

    jumbotron.classList.toggle('bg-dark')
}
/* jumboBack() */

/* EX14) Write a function to remove all the links under "Elsewhere" */

function removeLinks(){
    const elsewhereOl = document.querySelectorAll('.list-unstyled')[1]
    elsewhereOl.remove()
    /* for(let i=0; i<elsewhereOl.length) */
}

/* Write a function to change the column size for heading in jumbotron */

function jumboClass(){
    const jumbotron = document.querySelector('.jumbotron div:first-of-type')
    console.log(jumbotron);
    jumbotron.classList.toggle('col-md-6')
    /* jumbotron.classList.remove('col-md-6')
    jumbotron.classList.add('col-md-4') */
}


/* EX16) Write a function to remove the "Search" magnifying glass icon */

function searchRemove(){
    const magnifying = document.querySelector('svg')
    console.log(magnifying);
    magnifying.remove() 
}
/* EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post */

function removeFiftyChar(){
    const paragraph = document.querySelectorAll('.blog-post>p:nth-child(3)')
    /* console.log(paragraph); */
    for(let i=0; i<paragraph.length; i++){
        firstPara = paragraph[i].innerText
        /* console.log(firstPara); */
        const trim = firstPara.slice(50)
        /* console.log(trim); */
       /*  firstPara = trim */
        paragraph[i].innerText = trim
    }
}
/*EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)  */

/* function newerButton(){
    let newButton = document.createElement('button')
    let bodyParent = document.querySelector('.blog-main') 
    newButton.innerText = 'Newer'
    newButton.addEventListener('click', newBlog) 
    bodyParent.appendChild(newButton) 
} */

/* function newBlog(){
    const mainBlog = document.querySelector('.blog-main')
    const nav = document.querySelector('.blog-pagination')
    const div = document.createElement('div')
    const br = document.createElement('br')
    div.classList.add('blog-post')
    const h2 = document.createElement('h2')
    h2.classList.add('blog-post-title')
    h2.innerText = 'New Blog Post'
    div.appendChild(h2)

    
    
    mainBlog.insertBefore(div, nav)
    mainBlog.insertBefore(div, br)
} */
/* div.innerHTML += `<br><div class="blog-post">
    <h2 class="blog-post-title">New Blog Post</h2></div><br>` */

/* function newBlog(){
    const mainBlog = document.querySelector('.blog-main')
    mainBlog.innerHTML += `<br><div class="blog-post">
    <h2 class="blog-post-title">New Blog Post</h2></div><br>`
}
 */

function newBlog(){
    const nav = document.querySelector('.blog-pagination')
    nav.insertAdjacentHTML('beforebegin',`<br><div class="blog-post">
    <h2 class="blog-post-title">New Blog Post</h2></div><br>`)
}


/* function newBlog(){
    const mainBlog = document.querySelector('.blog-main')
    const div = document.createElement('div')
    div.innerHTML += `<br><div class="blog-post">
    <h2 class="blog-post-title">New Blog Post</h2></div><br>`
    const nav = document.querySelector('.blog-pagination')
    mainBlog.insertBefore(div, nav)
} */
/*EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post  */
/* function olderButton(){
    let oldButton = document.createElement('button')
    let bodyParent = document.querySelector('.blog-main') 
    oldButton.innerText = 'Older'
    oldButton.addEventListener('click', oldBlog) 
    bodyParent.appendChild(oldButton) 
} */

function oldBlog(){
    const lastBlog = document.querySelector('.blog-main div:last-of-type')
   console.log(lastBlog);
   lastBlog.remove()
}


/*EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name  */

function authorHover(){
    /* const author = document.querySelectorAll('.blog-post>p:nth-child(2)') */
    const author = document.querySelectorAll('.blog-post>p:nth-child(2)> a')
    console.log(author);
    for(let i=0; i<author.length; i++){        
        /* console.log(authorName); */
        author[i].addEventListener('mouseover',function(e){
            const authorName = author[i].innerText
            alert(authorName)
        })
    }
    
}

window.onload = function(){   
    
    authorHover()
}


