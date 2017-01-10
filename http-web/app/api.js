//DISCRIPTION
// THIS CONSOLE APP CONSUMES NASA GEO FEED API. IT GIVES USER THE LEVERAGE TO INTERACT WITH IT
//////////////////////INSTRUCTION/////////////////////////////////////////////////////
// TO CHECK THE TITLE IF THE FEED, TYPE "title".
//TO CHECK THE DESCRIPTION, TYPE 'description';
//TO CHECK THE DATE OF THE FEED, TYPE 'date'
//TO CHECK THE AUTHOR OF THE FEED, TYPE 'author'
// TO LIST AVAILABLE COMMANDS, TYPE 'commands'



var request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=SliDHtb2JbBGZYlTiwuHz4JKAHvdgxwV5660aXmo', function (error, response, body) {
   if (!error && response.statusCode == 200) {

    var result = JSON.parse(body);

    } 
    readline= require("readline");

    const io = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'NASA Neo-feed>'
    });

    io.on('line', function(line) {
        //createnote <note one>
        var words = line.trim();
        command = words;

        switch(command) {
            case 'commands':
                listComands();
                break;
            case 'date':
                console.log("Date: "  + result.date);
                break;
            case 'title':
                console.log("Title: "  + result.title);
                break;
            case 'author':
                console.log("Author: "  + result.copyright);
                break;

            case 'description':
               console.log("Explanation: "  + result.explanation);

                break;


            default:
            console.log("Don't recognize , " + line +" Please type commands to view command");
            break;
        }


    }).on('close', function() {
      console.log('Thank you for your time!');
      process.exit(0);
    });


  function showResponse(result) {
    var responseString = result.hdurl;
    document.getElementById('response').innerHTML += responseString;
  }
  function listComands(){
        console.log("date : display the date of the feed from NASA");
        console.log("description : display NASA feed explanation ");
        console.log("image : display the inage of the feed");
        console.log("title : display the title of the feed");
        console.log("next : display the next feed");
  };



})











// request('https://api.nasa.gov/planetary/apod?api_key=SliDHtb2JbBGZYlTiwuHz4JKAHvdgxwV5660aXmo', function (error, response, body) {
//    if (!error && response.statusCode == 200) {
        
//     var result = JSON.parse(body);
//     console.log(result.date);
//     console.log(result.explanation);
//       }
   
// }
// )