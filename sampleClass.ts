class sampleClass
{
    textProp: string;

    constructor(textProp: string)
    {
        this.textProp = textProp;
    }

    sampleMethod(textArg: string)
    {
        console.log(this.textProp + textArg);
    }
}

var secondApp = new sampleClass("sample");
secondApp.sampleMethod("concat");