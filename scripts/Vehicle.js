var Vehicle = (function () {
    //2. Constructor
    function Vehicle(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Vehicle.prototype, "model", {
        //3. Properties
        get: function () {
            return this._model;
        },
        set: function (model) {
            if (model === undefined)
                throw "Please define a model";
            this._model = model;
        },
        enumerable: true,
        configurable: true
    });
    //4. Methods/Functions
    Vehicle.prototype.start = function () {
        console.log("Started " + this.engine);
    };
    Vehicle.prototype.stop = function () {
        console.log("Stopped " + this.engine);
    };
    return Vehicle;
}());
var vehicle = new Vehicle("v8");
vehicle.model = "Audi";
vehicle.start();
