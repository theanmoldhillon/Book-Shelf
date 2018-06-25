document.addEventListener("DOMContentLoaded", () =>{

  // Model contains our information about books.
    const model = {
      getBooks: () => {
        return [{
          name: "Anna Karenina",
          author: "Leo Tolstoy",
          image: "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg",
          year: 1877
        },
        {
          name: "Madame Bovary",
          author: "Gustave Flaubert",
          image: "http://ecx.images-amazon.com/images/I/51o5dnjk07L._SL160_.jpg",
          year: 1856
        },
        {
          name: "War and Peace",
          author: "Leo Tolstoy",
          image: "https://images-na.ssl-images-amazon.com/images/I/51Fpt-rqfbL._SL160_.jpg",
          year: 1869
        },
        {
          name: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          image: "https://images-na.ssl-images-amazon.com/images/I/5154xUzeb-L._SL160_.jpg",
          year: 1925
        },
        {
          name: "Lolita",
          author: "Vladimir Nabokov",
          image: "https://images-na.ssl-images-amazon.com/images/I/41s2G6WxLvL._SL160_.jpg",
          year: 1955
        },
        ]
      }
    }
  

    // Octopus links our data in model to our methods in view.
    const octopus = {
      init: () => {
        view.render();
      },
      getBooks: () => {
        return model.getBooks()
      }
    }
  
    // View manages the display of our content . It selects and shows our data from model.
    const view = {
      render: () => {
        let htmlString = ""
        
        // Structure of Book Information
        for (const book of octopus.getBooks()) {
          htmlString += `<div class='book'>
          <img src='${book.image}'>
          <ul>
            <li>Title: ${book.name}</li>
            <li>Author: ${book.author}</li>
            <li>Year Published: ${book.year} </li>
          </ul>
           <button type="button" class="buttonRead">Read</button>
          </div>`
        }
  
        document.querySelector("#books").innerHTML = htmlString;


        // Selecting elements 
        const titleContent = document.querySelector(".titleContent")
        const authorContent = document.querySelector(".authorContent")
        const yearContent = document.querySelector(".yearContent")
        const urlContent = document.querySelector(".urlContent")
        const buttonSubmit = document.querySelector(".buttonSubmit")
        const book = document.querySelectorAll(".book")
        const buttonRead= document.querySelector(".buttonRead")


        // To submit new books.
        buttonSubmit.addEventListener("click",function(){
          let htmlString = ""; 

          for (const book of books) {
          books.innerHTML += `<div class= "book">
          <img class="image" src='${urlContent.value}' >
          <ul class="ul">
        button.addEventListener("click",function(){
            <li>Title: ${titleContent.value}</li>
            <li>Author: ${authorContent.value}</li>
            <li>Year Published: ${yearContent.value}</li>
          </ul>
          </div>
          <button class="read">READ</button>}`
        }


        // To mark the books as read. 
        // Turns the book border green.
        buttonRead.addEventListener("click",function(e){
          e.target.read = img.style.border = "4px solid green"

        })

})
        
     
    
      }
    }
  
    // To run model, view and octopus combined.
    octopus.init();
  
  })