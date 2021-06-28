
var canvas = new fabric.Canvas('myCanvas');

player_x =10;
player_y = 10;

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabri.Image.fromURL("gold-h1.png", function(Img){
		hole_obj = Img;
		hole_obj.scalToWidth(50);
		hole_obj.scalToHeighy(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scalToWidth(50);
		ball_obj.scalToHeighy(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj)

	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(player_y >=0){
		player_y = player_y - block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When Up arrow key is pressed, X = "+ player_x +", Y ="+player_y);
        canvas.remove(player_object);
        player_update();
	}

	function down()
	{
		if(player_y <=500){
			player_y = player_y + block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Down arrow key is pressed, X = "+ player_x +", Y ="+player_y);
			canvas.remove(player_object);
			player_update();
	}

	function left()
	{
		if(ball_x >5)
		{
			if(player_x >0)
				player_x = player_x - block_image_width;
				console.log("block image width =" + block_image_width);
				console.log("When Left arrow key is pressed, X ="+ player_x +", Y ="+player_y);
				canvas.remove(player_object);
				player_update();
		
	}

	function right()
	{
		if(ball_x <=1050)
		{
	
				player_x = player_x + block_image_width;
				console.log("block image width =" + block_image_width);
				console.log("When Right arrow key is pressed, X="+ player_x +", Y ="+player_y);
				canvas.remove(player_object);
				player_update();
		
	}
	
}

