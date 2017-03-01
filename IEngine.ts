interface IEngine
{
    start():void;
    stop():void;
}

interface IPlaneEngine extends IEngine
{
    fly():void;
    glide():void;
}

class Truck implements IEngine
{
    start():void
    {
        console.log("Engine is starting");
    }
    stop():void
    {
        console.log("Engine is stopping");
    }
}

class Jet implements IPlaneEngine
{
    start():void
    {
        console.log("Plane Engine is starting");
    }
    stop():void
    {
        console.log("Plane Engine is stopping");
    }
    fly():void
    {
        console.log("Plane Engine is flying");
    }
    glide():void
    {
        console.log("Plane Engine is gliding");
    }
    
}

var plane:IPlaneEngine = new Jet();
plane.start();
plane.glide();
plane.fly();
plane.stop();
