// Namespace

var APP = APP || {};

APP.methodes = {
	produit: {
		lists: function(produits) {
			var l = '';
			if ( 'object' === typeof produits ) {
				for (var i = 0, item; item = produits[i]; i++)
					l += (item.getName()) + ' (' + (item.getPrice()) + 'ar)\n';
				return l;
			}
			return false;
		},
		totalPrice: function(produits) {
			if ( 'object' === typeof produits ) {
				var s = 0;
				for (var i = 0, item; item = produits[i]; i++)
					s += item.getPrice();
			
				return s + 'ar';
			}
			return false;
		}
	}
};

APP.event = {};

// Class Produit

var Produit = function(name, price, reference) {
	this.name = name;
	this.price = price;
	this.reference = reference;
}

Produit.prototype.getName = function() {
	return this.name;
}

Produit.prototype.getPrice = function() {
	return this.price;
}

Produit.prototype.getReference = function() {
	return this.reference;
}

console.log( APP );

APP.produit1 = new Produit('HP Mini 5101', 480000, 'HP-5101');
APP.produit2 = new Produit('Motorola bravo', 120000, 'MB520');

console.log(APP.produit1);
console.log(APP.produit2);

var produit = APP.methodes.produit;

console.log( produit.lists([APP.produit1, APP.produit2]) );
console.log( produit.totalPrice([APP.produit1, APP.produit2]) );