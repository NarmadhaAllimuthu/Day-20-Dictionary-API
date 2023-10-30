function word(){
    let input=document.getElementById("inputWord").value;                  //getting value from input box
                                                                            
      var a="https://api.dictionaryapi.dev/api/v2/entries/en/";             //storing api in a
      let b=a.concat(input);                                                 //concat or join input value in api
                                                                          
    const api=fetch(b);                                                       //fetching api return promise
api.then((data)=>data.json()).then((data1)=>                                  //readablestream to json 

{
    const  result=document.getElementById("result");                          //getting result div
    result.style.display = "block";                                           //display result with style
    result.innerHTML="";                                                          
    for (var k = 0; k < data1.length; k++) {                                  //loop for iterate all values                                       // c(data1[0])
  const arr=data1[k];
  

for (var i = 0; i < arr.meanings.length; i++) {                               //loop inside meanings to get specified things
    let meaning = arr.meanings[i];                                            
   

    let definitionDiv = document.createElement("div");                         //creating div 
        definitionDiv.innerHTML = `                                           
        <div id="speech" class="font-italic">Parts of speech: 
        ${meaning.partOfSpeech}</div>
        <div id="def" class="text-monospace"> Definition:</div>
        <div class="font-weight-normal"> ${meaning.definitions[0].definition} </div>
        `;                                                                              //inserted values inside the div
        result.appendChild(definitionDiv);


  
    for(var j=0;j<meaning.definitions.length;j++){                                     //again loop for definitions iterate
   
   
    if( meaning.definitions[j].example){                                               //checking example is available or not
   

        // let example = `example: ${meaning.definitions[j].example}`;
            
        // Create and append a <div> for each example
        let exampleDiv = document.createElement("div");
        exampleDiv.innerHTML = `<div class="text-uppercase"> Eaxmple :</div>
        <div class="font-weight-light"> ${meaning.definitions[j].example}</div>`;
        result.appendChild(exampleDiv);
      }
    }

    if (meaning.synonyms.length != 0) {

      // Create and append a <div> for synonyms
      let synonymsDiv = document.createElement("div");
      synonymsDiv.innerHTML = `<div class="text-monospace">Synonyms: </div>
      <div  class="font-weight-normal"> ${meaning.synonyms.join(", ")}</div>`;
      result.appendChild(synonymsDiv);
    }
}
  } 
})
.catch((error) => {
  alert("Something went wrong " + error);                                                //error handled
}); 

}

const button=document.getElementById("button");
button.addEventListener("click",word);




















