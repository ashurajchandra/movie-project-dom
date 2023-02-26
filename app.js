// alert("hello js")

const addMovieButton = document.querySelector('#add-movie');

const movieModal = document.querySelector('#add-modal');
const backdrop = document.querySelector('#backdrop');
const cancelButton = document.querySelector('.btn--passive');
const addMovie = document.querySelector('.btn--success');
const inputs = document.querySelectorAll('input');
const ulItem = document.querySelector('#movie-list');
const movieDatabase = document.querySelector('section')
// console.log("inputs", inputs)
  const movieItems = []

// console.log("movieItems",movieItems)
  function toggleMovieDatabaseSection(){
    if(movieItems.length>0){
     movieDatabase.style.display= 'none'
    }else{
      movieDatabase.style.display='block'
    }

  }

function clearInputs(){
    for (input of inputs){
      //  console.log('input',input)
       input.value = ''
    }
}



function cancelModal (){
    handleBackdrop()
    clearInputs()
// inputs[0].value = '';
// inputs[1].value = '';
// inputs[2].value = ''

}


function handleBackdrop (){
    handleToggleModal()
}


function handleToggleModal(){
    // console.log("button is clicked")
    movieModal.classList.toggle('visible')
    backdrop.classList.toggle('visible')
}


function handleMovieList (){
    //check the input values
    const title = inputs[0].value;
    const imageUrl = inputs[1].value;
    const rating = inputs[2].value

    if (title == '' | imageUrl=='' | rating==''){
      return  alert('please enter all the fields')
    }

    const movieItem ={
      id: Math.random(),
      title: title,
      imageUrl: imageUrl,
      rating: rating
    }
// console.log("movieItem",movieItem)
  movieItems.push(movieItem)
    renderMovieList(movieItem)
    toggleMovieDatabaseSection()
    handleBackdrop()
    clearInputs()




    // console.log('movieItem', movieItem)


}

function handleDeleteMovie(id){
// function handleDeleteMovie(event){
  // console.log("event",event.currentTarget.id)
//   console.log("event target",event.target.value)
// console.log("movieItems",movieItems)
// for(movie of movieItems){
//   console.log(movie)
// }
  //  const movieIndex = movieItems.findIndex((movie)=>movie.id==event.currentTarget.id)
  const movieIndex = movieItems.findIndex((movie)=>movie.id==id)

  //  console.log('movieIndex',movieIndex)
   if(movieIndex != -1){
       movieItems.splice(movieIndex, 1)
       toggleMovieDatabaseSection()
       ulItem.children[movieIndex].remove()
      //  console.log("delete item", ulItem.children[movieIndex])
   }
   

  //logic for deleting the movie on which user has clicked

  //we need an unique id
  //with the help of id we will remove movie item from list

  //remove movie from screen and also remove from movieItems array
}
//
function renderMovieList({title, imageUrl, rating, id}){
    // const {title, imageUrl, rating} = item   ///object destructuring
    // console.log("item",title, imageUrl, rating)

    const listItem = document.createElement('li');
    listItem.id = id

    listItem.className='movie-element';

    // listItem.innerHTML = `
    
    // <div>
    // <img src=${imageUrl}/>
    // </div>
    // <div>
    // <p> title: ${title} </p>
    // <p> rating: ${rating} </p>
    // </div>

    // `

   //create a top level div  

   //create an image and append as a child to top level div
   //create another div to wrap title & rating and append title and raring to this div first
   //then append that div as a child to top level div


//    <div>
//     <img/>

//     <div>
//         <p>title:</p>
//         <div>rating:</div>
//     </div>
//    </div>

const wrapperDiv =  document.createElement('div')

const image = document.createElement('img')
image.src=  imageUrl

wrapperDiv.className='movie-element__image '
wrapperDiv.appendChild(image)

const movieInfoWrapper =  document.createElement('div');
movieInfoWrapper.className='movie-element__info '
const movieTitle =  document.createElement('p');
movieTitle.innerHTML = title
// console.log("movieTitle",movieTitle)
const movieRating =  document.createElement('p')
movieRating.innerHTML = rating



{/* <div class='wrapperDiv'>
  <img src={}/> 
  </div>
  <div class='movie-element__info '>
    <p>title</p>
    <p>rating</p>
  </div> */}


movieInfoWrapper.appendChild(movieTitle)
movieInfoWrapper.appendChild(movieRating)

// const parentWrapper = document.createElement('div')
// parentWrapper.appendChild(wrapperDiv)
// parentWrapper.appendChild(movieInfoWrapper)

listItem.appendChild(wrapperDiv)
listItem.appendChild(movieInfoWrapper)
// console.log("listItem",listItem)



listItem.addEventListener('click', handleDeleteMovie.bind(null, id))
ulItem.appendChild(listItem)


}



addMovieButton.addEventListener('click', handleToggleModal)
backdrop.addEventListener('click', handleBackdrop)
cancelButton.addEventListener('click',cancelModal )
addMovie.addEventListener('click', handleMovieList)



const myArray = [1,2,3,45,4]


var a =10;

a ='abc'



// const myArray1:Array<numbers> = [1,2,3,4,5]


// const booleanValueL:boolean   =true

// interface movieObj {
//   id: number,
//   title:string,
//   rating:number,
//   url:string
// }

// const myObject:movieObj = {
//   id: 0.12,
//   title:'abc',
//   rating:4,
//   url:'abcs'
// }



// bind, call, apply
//localstorage