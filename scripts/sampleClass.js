var sampleClass = (function () {
    function sampleClass(textProp) {
        this.textProp = textProp;
    }
    sampleClass.prototype.sampleMethod = function (textArg) {
        console.log(this.textProp + textArg);
    };
    return sampleClass;
}());
var secondApp = new sampleClass("sample");
secondApp.sampleMethod("concat");
