window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;
  
  //capture the reset event
  document.f.onreset=resetPage;

  var hasPlayed = false;
    
  var audio = new Audio('nsync.mp3'); 

  var myMsg = document.getElementById("myMsg");
    
    
  //define process function
  function processForm() {

    //store name in a variable
    var name = document.f.name.value;

    var where = document.f.where.value;
      
    var why = document.f.why.value;
      
    var howget = document.f.howget.value;
      
    var howlong = document.f.howlong.value;
      

    //error detection
    if (name == "" || where == "" || why == "" || howget == "" || howlong == "") {
      alert("you forgot something..");

    } else {

       //play song
        if(hasPlayed == false)
        {
          audio.play();
          hasPlayed = true;

        }
        

     myMsg.innerHTML = "My dearest <em> " + name + "</em>, I know you <em> " + howget + "</em> to <em> " + where + "</em> because you said, ''<em> " + why + ".</em>'' I asked when you're coming back... You looked at me and said, ''<em> " + howlong + ".</em>'' It really hurts and bby I just want you back. <br> xoxo love justin";
        
      myMsg.className = "show";
    }
  
    //prevent page from reloading
    return false;
  }
  
//if user chooses "reset"
  function resetPage(){
    //remove any text from myMsg
    myMsg.innerHTML = "";   
    //change the class name
    myMsg.className = "hide";

 
    //reset the audio  
  audio.pause();
  audio.currentTime = 0;   
  hasPlayed = false;
      
      
    //reset the name field
    name.value = "";
    //reset the where field
    where.value = "";
    //reset the why field
    why.value = "";  
    //reset the howget field
    howget.value = "";
    //reset the howlong field
    howlong.value = "";
      
    return false; 
      
    
  }
}