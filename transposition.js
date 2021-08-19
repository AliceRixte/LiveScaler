inlets = 2;
outlets = 1;

var transp = 0;

function msg_int(a){
	if(inlet == 0){
		outlet(0 , a + transp);
	}else if(inlet == 1){
		post(transp);
		transp = a;
	}
}