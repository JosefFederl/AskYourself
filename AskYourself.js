//function $(id) {
//  return document.getElementById(id);
//}

function f_random(oA_json){
    var r = Math.random();
    var sum = 0;
    var t = 0;
    var id_of_choosen;
    oA_json.forEach(function(element) {
        sum += element.weight;        
    });
    oA_json.some(function(element) {        
        t += element.weight / sum;
        if( t >= r ) {
            id_of_choosen = element.id;
            return true;
        }       
    }); 
    return id_of_choosen;
}
//    function justanotherRandomfunction(){
//    var oA_numIndex_random;
//    while(true){
//      oA_json[oA_numIndex_random] = Math.floor(Math.random() * oA_json_in_f_random.length);
//      
//      if (oA_numIndex_random.w > Math.random() * 255) {
//          return oA_numIndex_random;
//    }}}