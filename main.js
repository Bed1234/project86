var canvas = new fabric.canvas('myCanvas');

width_block=30;
height_block=30;
player_x=10;
player_y=10;
player=empty;
block_image=empty;


function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object=Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
          block_object.set({
              top:player_Y,
              left:player_X
          });
          canvas.add(block_object);
          
    });

}



