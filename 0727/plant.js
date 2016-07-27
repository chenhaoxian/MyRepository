(function(){




	function Plant(name,hp,state){
		this.name = name;
		this.hp = hp;
		this.state = state;
	}

	var plantPrototype = {
		constructor : Plant,
		attack:function(obj){
			console.log(this.name + "is attacking");
			if(obj.hp && typeof obj.hp=='number'){
				obj.dx();
			}
		},
		die:function(){
			console.log(this.name + "is dead");
		},
		dx: function(){
			this.hp--;
			if(this.hp == 0){
				this.die();
			}
		}
	}

	Plant.prototype = plantPrototype;

	function Sunflower(name,hp,state,production){
		Plant.call(this,name,hp,state);
		this.production = production;
	}

	var plant = new Plant();

	plant.produce = function(){
		this.production++;
	}

	Sunflower.prototype = plant;

	function Peanut(name,hp,state,power){
		Plant.call(this,name,hp,state);
		this.power = power;
	}

	var plant2 = new Plant();

	Peanut.prototype = plant2;

	var pn = new Peanut("pn",2,"ok",100);
	var sf = new Sunflower("sf",3,"ok",150)

	while(sf.hp != 0){
		pn.attack(sf);
		console.log(sf.hp);
	}








})();