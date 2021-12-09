
// create canvas

const { World, Engine, Render, Runner, Bodies} = Matter;

// Create an Engine that automatically produces a world
const engine = Engine.create();

// engine.world.gravity.y = 0

const {world} = engine;

//Define size of rendered World
const height= window.innerHeight*0.8;
const width= window.innerHeight*0.8;

//Create a render to show the world
const renderTris = Render.create({
  element: document.querySelector("#tela"),  //where to show the world
  engine: engine, //use this engine
  options:{
    wireframes: true,
    width, //dimensions in px of the world
    height
  }
}); 

//call render to visualise a so far empty world
Render.run(renderTris) //run the render object created above
//Render needs a runner to connect world and engine
Runner.run(Runner.create(), engine);

//create borders
const borders =[
  Bodies.rectangle(width/2, 0, width, 20, {
    isStatic: true
  }),
  Bodies.rectangle(width/2, height, width, 20, {
    isStatic: true
  }),
  Bodies.rectangle(0, height/2, 20, height, {
    isStatic: true
  }),
  Bodies.rectangle(width, height/2, 20, height, {
    isStatic: true
  })

]

World.add(world, borders)


//create grid

const grid = [
  Bodies.rectangle((width/2 - width*0.14), height/2, 5, height*0.8,
    {
      isStatic: true
    }
  ),
  Bodies.rectangle((width/2 + width*0.14), height/2, 5, height*0.8,
    {
      isStatic: true
    }
  ),
  Bodies.rectangle(width/2, (height/2 - width*0.14), width*0.8, 5,
    {
      isStatic: true
    }
  ),
  Bodies.rectangle(width/2, (height/2 + width*0.14), width*0.8, 5,
    {
      isStatic: true
    }
  ),
]

World.add(world, grid)

//the game