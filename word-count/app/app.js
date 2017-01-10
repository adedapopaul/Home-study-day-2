function words( sentence)
{
    var temp={};
    
   var dataInput= sentence.split(" ").filter(function(n){ return n != ''}).join(' ');
    var word= dataInput.replace(/\s|\n|\t/g, " ");
    
    var count= word.split(' ');


    for (var i = 0; i < count.length; i++) {
        
        if ( count[i] in temp){
          temp[count[i]]=(+temp[count[i]] ||0 ) + 1
        }
        
        
        else{
          
          temp[count[i]]= 1;
        }
    }
    return temp;
    
}

module.exports = words;