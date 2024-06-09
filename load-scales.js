// load-scale.js
//
// automatically generates as many coll objects
// as there are custom scales inside the custom-scales folder

// inlets and outlets
inlets = 1;
outlets = 0;

// global variables and arrays
var num_scales = 0;
var max_scales = 12;

// Maxobj variables for scripting
var colls = new Array(max_scales);
var gate;

// sliders -- generates and binds the sliders in the max patch
function init(val)
{
    if(arguments.length) // bail if no arguments
    {
        // parse arguments
        var a = arguments[0];

        // safety check for number of scales
        if(a<0) a = 0;
        if(a>max_scales) a = max_scales; // too many scales, set to 12

        // out with the old...
        if(num_scales) this.patcher.remove(gate);
        for(var i=0;i<num_scales;i++)
        {
            this.patcher.remove(colls[i]);
        }

        // in with the new
        num_scales = a;
        if(num_scales) {
            gate = this.patcher.newdefault(300, 150, "gate", a);
            patch_inlet_rout = this.patcher.getnamed("inlet-rout-gate-livescaler");
            patch_inlet_mess = this.patcher.getnamed("inlet-mess-gate-livescaler");
            this.patcher.connect(patch_inlet_rout,0,gate,0);
            this.patcher.connect(patch_inlet_mess,0,gate,1);
            patch_outlet = this.patcher.getnamed("outlet-custom-scales-livescaler");
        }



        for(var k=0;k<a;k++) // create the new coll objects, connect them to the gate
        {
            colls[k] = this.patcher.newdefault(300+(k*100), 250, "coll");
            this.patcher.connect(gate, k, colls[k], 0);
            this.patcher.connect(colls[k], 0, patch_outlet, 0);
        }

        // connect new objects to this js object's inlet
        // ourself = this.box; // assign a Maxobj to our js object
        //if (num_scales) this.patcher.connect(ourself, 0, gate, 0); // connect the funnel to us
    }

    else // complain about arguments
    {
        post("init needs arguments (total number of scales)");
        post();
    }
}

// remove all gates and colls
function clear()
{
    this.patcher.applyif(
        function(obj) {
            this.patcher.remove(obj)
        },
        function(obj) {
            return obj.maxclass == "coll" || obj.maxclass == "gate";
        }
    )
}


// bang
function bang()
{

}

