class Vehicle
{
    //1. Fields
    engine:string;
    private _model:string;
    //2. Constructor
    constructor(engine:string)
    {
        this.engine = engine;
    }

    //3. Properties
    get model():string
    {
        return this._model;
    }
    set model(model:string)
    {
        if (model===undefined)
            throw "Please define a model"
        this._model = model;
    }
    //4. Methods/Functions
    start():void
    {
        console.log(`Started ${this.engine}`);
    }    
    stop():void
    {
        console.log(`Stopped ${this.engine}`);
    }

}

var vehicle = new Vehicle("v8");
vehicle.model = "Audi";
vehicle.start();
