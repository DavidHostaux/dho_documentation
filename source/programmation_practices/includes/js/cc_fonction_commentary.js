$(function(){
    var index = 0;
    /*
    * REQUIRES  :   length: the lenth of the quadrilateral
                    width: the width of the quadrilateral
    * MODIFIES  :   Set index = 2
    * EFFECTS   :   compute the perimeter and return the result
    */
    perimeterCalculation = function(length, width){
        var index = 2;
        return (length + width) * index;
    }
});
