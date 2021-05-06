// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorBar = document.querySelector("#modal")

document.body.addEventListener("click", (e) => {
  if(e.target.innerText === EMPTY_HEART || e.target.innerText === FULL_HEART){
    mimicServerCall().then(()=> {
      if(e.target.innerText === EMPTY_HEART){
        e.target.className ="activated-heart"
        e.target.innerText = FULL_HEART
      }
      else if(e.target.innerText === FULL_HEART){
        e.target.className =""
        e.target.innerText = EMPTY_HEART
      }
    })
      .catch((error) => {
      errorBar.className = ""
      errorBar.innerText = error
      setTimeout(() => errorBar.className = "hidden", 3000)
    })
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

