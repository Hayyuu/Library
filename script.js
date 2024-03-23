// "use strict"
// const prompt=require("prompt-sync")();

const body=document.querySelector('body');


// function Book(author,title,read,pages){
//     this.author=author;
//     this.title=title;
//     this.read=read;
//     this.pages=pages;
//     info=()=>{
//          return this.title +" "+ this.author + ", " + this.pages + ' pages, '+ yesno;
//     };
// }
// function addBookToLibrary(author,title,read,pages){
//     let book=new Book(author,title,read,pages);
//     myLibrary.push(book);
//     return book;
// }
class Book{
    author;
    title;
    read;
    pages;
    constructor(author,title,read,pages){
        this.author=author;
        this.title=title;
        this.read=read;
        this.pages=pages;
    }
    
    info=()=>{
         return this.title +" "+ this.author + ", " + this.pages + ' pages, '+ yesno;
    };
   
}
const myLibrary=[new Book( 'Imran','Accounting', 'yes',400),
                 new Book('Hayat','Software', 'yes',200),
                 new Book( 'semira','Medicine', 'yes',1400)];
Book.prototype.addBookToLibrary=()=>{
    myLibrary.push(this);
    return this;
}    
// let title=prompt("Title:  ");
// let author=prompt("Name: ");
// let read=prompt("Have you read the book? ");
// let pages=prompt("Number of pages: ");

// addBookToLibrary(author,title,read,pages);
console.log(myLibrary);
const dialog=document.querySelector('dialog');
const ok_btn=document.querySelector("dialog button");
const add_btn=document.querySelector("#add_btn");
ok_btn.addEventListener('click',(event)=>{
    const author=document.querySelector('#author').value;
    const title=document.querySelector('#title').value;
    const read=document.querySelector('input[name="read"]:checked').value;
    const page=document.querySelector('#pages').value;
    let book=new Book(author,title,read,page);
    book.addBookToLibrary();
    const remove_btn=document.createElement('button');
    const change_status=document.createElement('button');
    if (read=="yes"){
        change_status.textContent="Mark not complete";
    }
    else{
        change_status.textContent="Mark Complete";
    }
    change_status.addEventListener('click',()=>{
       
        if (book.read==="yes"){
            change_status.textContent="Mark complete";
         }
        else{
         change_status.textContent="Mark not Complete";
        
         }
         book.read=book.changeReadStatus(book.read);
         console.log(book.read);
    });
    remove_btn.textContent="Remove";
    const h=document.createElement('h2');
    h.textContent=author;
    body.appendChild(h);
    body.appendChild(remove_btn);
    body.appendChild(change_status);
   
    remove_btn.addEventListener('click',()=>{      
        let element_index=myLibrary.indexOf(book);
        let removed_element=myLibrary.splice(element_index,1);
        console.log(removed_element);
        body.textContent="";
        displayEachBook(myLibrary);
    });
    // event.preventDefault();//to prevent default behavior
})
add_btn.addEventListener('click',
      () => {
        dialog.showModal();
        // window.location.href="form.html";
});
Book.prototype.changeReadStatus = function(read){
    if (read=="yes"){
        read="no"; 
    }
    else{
       read="yes";
    }
    return read;
}
function displayEachBook(books){
    books.forEach((element) => {
        const remove_btn=document.createElement('button');
        remove_btn.textContent="Remove";
        const h=document.createElement('h2');
        h.textContent=element.author;
        body.appendChild(h);
        body.appendChild(remove_btn);
        const change_status=document.createElement('button');
        if (element.read==="yes"){
           change_status.textContent="Mark not complete";
        }
       else{
        change_status.textContent="Mark Complete";
        }
        body.appendChild(change_status);
        change_status.addEventListener('click',()=>{
            if (element.read==="yes"){
                change_status.textContent="Mark complete";
             }
            else{
             change_status.textContent="Mark not Complete";
            
             }
             element.read=element.changeReadStatus(element.read);
             console.log(element.read);
        });
        remove_btn.addEventListener('click',()=>{
           
            //console.log( myLibrary.indexOf(element));
            let element_index=myLibrary.indexOf(element);
            let removed_element=myLibrary.splice(element_index,1);
            console.log(removed_element);
            body.textContent="";
            displayEachBook(myLibrary);
        })
    });
}

displayEachBook(myLibrary);
// const book=new Book("Hayat","Odin",1,200);
// Book.prototype.sayHello=function(){
//     return "Hello";
// };


// console.log(book.sayHello());