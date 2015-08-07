'use strict';


var requirejs = require('requirejs');
/*var dsl_parser = require('./node_modules/jhipster-uml/lib/dsl/dsl_parser');
    EntitiesCreator = require('./node_modules/jhipster-uml/lib/entitiescreator'),
    ClassScheduler = require('./node_modules/jhipster-uml/lib/scheduler'),
    ParserFactory = require('./node_modules/jhipster-uml/lib/editors/parser_factory')/*,
    model = require('./diagram_model');*/

var uml = joint.shapes.uml;


graph = new joint.dia.Graph;
paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 800,
    height: 600,
    gridSize: 1,
    model: graph
});
uml = joint.shapes.uml;
classes = {
    mammal: new uml.Interface({
        position: { x:300  , y: 50 },
        size: { width: 240, height: 100 },
        name: 'Mammal',
        attributes: ['dob: Date'],
        methods: ['+ setDateOfBirth(dob: Date): Void','+ getAgeAsDays(): Numeric']
    }),
    person: new uml.Abstract({
        position: { x:300  , y: 300 },
        size: { width: 240, height: 100 },
        name: 'Person',
        attributes: ['firstName: String','lastName: String'],
        methods: ['+ setName(first: String, last: String): Void','+ getName(): String']
    }),
    bloodgroup: new uml.Class({
        position: { x:20  , y: 190 },
        size: { width: 220, height: 100 },
        name: 'BloodGroup',
        attributes: ['bloodGroup: String'],
        methods: ['+ isCompatible(bG: String): Boolean']
    }),
    address: new uml.Class({
        position: { x:630  , y: 190 },
        size: { width: 160, height: 100 },
        name: 'Address',
        attributes: ['houseNumber: Integer','streetName: String','town: String','postcode: String'],
        methods: []
    }),
    man: new uml.Class({
        position: { x:200  , y: 500 },
        size: { width: 180, height: 50 },
        name: 'Man'
    }),
    woman: new uml.Class({
        position: { x:450  , y: 500 },
        size: { width: 180, height: 50 },
        name: 'Woman',
        methods: ['+ giveABrith(): Person []']
    })
};
_.each(classes, function(c) { graph.addCell(c); });
relations = [
    new uml.Generalization({ source: { id: classes.man.id }, target: { id: classes.person.id }}),
    new uml.Generalization({ source: { id: classes.woman.id }, target: { id: classes.person.id }}),
    new uml.Implementation({ source: { id: classes.person.id }, target: { id: classes.mammal.id }}),
    new uml.Aggregation({ source: { id: classes.person.id }, target: { id: classes.address.id }}),
    new uml.Composition({ source: { id: classes.person.id }, target: { id: classes.bloodgroup.id }})
];
_.each(relations, function(r) { graph.addCell(r); });






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