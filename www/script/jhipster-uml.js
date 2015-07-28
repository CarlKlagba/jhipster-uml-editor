'use strict';


var requirejs = require('requirejs');
/*var dsl_parser = require('./node_modules/jhipster-uml/lib/dsl/dsl_parser');
    EntitiesCreator = require('./node_modules/jhipster-uml/lib/entitiescreator'),
    ClassScheduler = require('./node_modules/jhipster-uml/lib/scheduler'),
    ParserFactory = require('./node_modules/jhipster-uml/lib/editors/parser_factory')/*,
    model = require('./diagram_model')*/;*/

var uml = joint.shapes.uml;

requirejs([], function(){
	
});


function dslToClass(){
	var parser = ParserFactory.createParser("domain.js", "sql");
  	parser.parse();

  	var classesToAdd = parser.getClasses();

  	classesToAdd.forEach(addClass);
};


function addClass(element, index, array){
	var name;
	var attributes = [];

	name = element.name;
	//attributes

	classes[name] = new Class({
		position: { x:20*index  , y: 10*index },
		size: { width: 240, height: 100 },
		name : element.name,
		attributes: attributes,
		methods: []
	});
	model.graph.addCell(classes[name]);
};