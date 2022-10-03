var block_image_object = "";
var canvas = new fabric.Canvas("bdaycard");
var p = document.getElementById("hbty");

function new_image(){
    fabric.Image.fromURL('image.jpg', function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(770);
        block_image_object.scaleToHeight(433);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
};

function activated(){
    p.play();
    new_image();
}