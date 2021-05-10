var canvas = new fabric.Canvas('myCanvas');

block_width=30;
block_height=30;
player_X=10;
player_Y=10;
var player_object="";
var block_object="";


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




window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed=e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey==true && keyPressed=='80'){
      console.log("P and shift pressed together");
      block_width=block_width + 10;
      block_height=block_height + 10;
      document.getElementById("current_width").innerHTML=block_width;
      document.getElementById("current_height").innerHTML=block_height;

  }


  if(e.shiftKey==true && keyPressed=='77'){
    console.log("M and shift pressed together");
    block_width=block_width - 10;
    block_height=block_height - 10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;

}

  
    
   if(keyPressed=='70'){
   new_image('ironman_face.png');
    console.log("f");
     }
   if(keyPressed=='66'){
   new_image('spiderman_body.png');
    console.log("b");
           }
    
           
    if(keyPressed=='76'){
    new_image('hulk_legs.png');
    console.log("l");
     }
           
         if(keyPressed=='84'){
            new_image('thor_right_hand.png');
           console.log("t");
           }
           
         if(keyPressed=='72'){
            new_image('captain_america_left_hand.png');
           console.log("h");
           }



           
           if(keyPressed=='38'){
            console.log("Up");
            Up();
            }
          
            if(keyPressed=='40'){
                console.log("Down");
               Down();
                }
            if(keyPressed=='37'){
             console.log("Left");
            Left();
            }
            
            if(keyPressed=='39'){
               console.log("Right");
                Right();
                 }

}
