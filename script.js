/* Fill your code*/

//displaying the add post window on clicking the button

let add =  document.getElementById("addBlog");
add.addEventListener('click',function(){
    document.getElementById('popupContact').style.display = "block";
})

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('popupContact').style.display = "none";
})

//creating the blog class with two methods needed to create a blog;
class blog{
    constructor(title,details){
        this.title = title;
        this.details = details;
    }
    addTitle(){
        let title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;

    }
    addDescription(){
        let details = document.createElement('p');
        details.setAttribute("id","blog-title");
        console.log(details);
        document.getElementById('card-text').appendChild(details);
        details.innerHTML += this.details;
    }
}

//on clicking the post button the blog created is posted in the website.

document.getElementById('post').addEventListener('click',function(){
    document.getElementById('card-text').style.display = 'block';
    
    let image=document.createElement('img');
    image.src='./assets/javascript.png';
    document.getElementById('card-text').appendChild(image);
    
    let new_blog = new blog(document.getElementById('title').value,document.getElementById('detail').value)
    document.getElementById('popupContact').style.display = "none";
    new_blog.addTitle();
    new_blog.addDescription();
})
