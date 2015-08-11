define([	"app/model",	"dsl_parser",	"entitiescreator",		"scheduler",	"parser_factory"], 
function (	model,			dsl_parser,		EntitiesCreator,		ClassScheduler,	ParserFactory){
/* 
var dsl_parser = require('jhipster-uml/lib/dsl/dsl_parser'),
    EntitiesCreator = require('jhipster-uml/lib/entitiescreator'),
    ClassScheduler = require('jhipster-uml/lib/scheduler'),
    ParserFactory = require('jhipster-uml/lib/editors/parser_factory');
 */

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
    
    
    
    return {
    	dslToClass	: function dslToClass(){
			var parser = ParserFactory.createParser("domain.js", "sql");
			parser.parse();

			var classesToAdd = parser.getClasses();

			classesToAdd.forEach(addClass);
		},


		addClass	: function addClass(element, index, array){
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
		}

    };
});