var canvas = new fabric.Canvas('myCanvas');

block_width=30;
block_height=30;
player_X=10;
player_Y=10;
var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.webp",function (Img){
        player_object=Img;
         player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
          player_object.set({
              top:player_Y,
              left:player_X
          });
          canvas.add(player_object);

    });

}




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
   new_image("ironman_body.png");
    console.log("b");
           }
    
           
    if(keyPressed=='73'){
    new_image('ironman_legs.png');
    console.log("i");
     }
           
     if(keyPressed=='84'){
     new_image('ironman_right_hand.png');
    console.log("t");
    }
           
    if(keyPressed=='72'){
     new_image('ironman_left_hand.png');
    console.log("h");
    }

           
    if(keyPressed=='75'){
        new_image('hulk_face.png');
       console.log("k");
       }

       if(keyPressed=='76'){
        new_image('hulkd_body.png');
       console.log("l");
       }

       if(keyPressed=='70'){
        new_image('hulk_left_hand.png');
       console.log("z");
       }

       if(keyPressed=='78'){
        new_image('hulk_right_hand.png');
       console.log("n");
       }

       if(keyPressed=='79'){
        new_image('hulk_legs.png');
       console.log("o");
       }

       if(keyPressed=='82'){
        new_image('spiderman_face.png');
       console.log("r");
       }
       if(keyPressed=='83'){
        new_image('spiderman_left_hand.png');
       console.log("s");
       }

       if(keyPressed=='85'){
        new_image('spiderman_right_hand.png');
       console.log("u");
       }
       if(keyPressed=='86'){
        new_image('spiderman_legs.png');
       console.log("v");
       }
       if(keyPressed=='87'){
        new_image('spiderman_body.png');
       console.log("w");
       }
       if(keyPressed=='65'){
        new_image('thor_face.png');
       console.log("a");
       }
       if(keyPressed=='67'){
        new_image('spiderman_body.png');
       console.log("c");
       }
       if(keyPressed=='68'){
        new_image('thor_left_hand.png');
       console.log("d");
       }
       if(keyPressed=='69'){
        new_image('thor_right_hand.png');
       console.log("e");
       }
       if(keyPressed=='71'){
        new_image('hulk_legs.png');
       console.log("g");
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

function Up() {
    if(player_Y > 0){
     player_Y=player_Y-block_height;
     console.log("Block image height="+block_height);
     console.log("When up arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
     canvas.remove(player_object);
     player_update();
    }
    
  }
  
  
  function Down() {
    if(player_Y < 500){
     player_Y=player_Y+block_height;
     console.log("Block image height="+block_height);
     console.log("When down arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
     canvas.remove(player_object);
     player_update();
    }
    
  }
  function Left() {
    if(player_X > 0){
     player_X=player_X-block_width;
     console.log("Block image width="+block_width);
     console.log("When left arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
     canvas.remove(player_object);
     player_update();
    }
    
  }
  
  
  function Right() {
    if(player_X < 850){
     player_X=player_X+block_width;
     console.log("Block image width="+block_width);
     console.log("When Right arrow key is pressed,X =" + player_X + " , Y = " + player_Y);
     canvas.remove(player_object);
     player_update();
    }
    
  }



