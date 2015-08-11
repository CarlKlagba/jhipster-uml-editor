define([    "jquery", 	"joint",     "app/model",    "app/service"],
function (  $,			joint,        model,          service){
   
model.graph = new joint.dia.Graph;

model.paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 800,
    height: 600,
    gridSize: 1,
    model: model.graph
});


var uml = joint.shapes.uml;

model.classes = {

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

_.each(model.classes, function(c) { model.graph.addCell(c); });
model.relations = [
    new uml.Generalization({ source: { id: model.classes.man.id }, target: { id: model.classes.person.id }}),
    new uml.Generalization({ source: { id: model.classes.woman.id }, target: { id: model.classes.person.id }}),
    new uml.Implementation({ source: { id: model.classes.person.id }, target: { id: model.classes.mammal.id }}),
    new uml.Aggregation({ source: { id: model.classes.person.id }, target: { id: model.classes.address.id }}),
    new uml.Composition({ source: { id: model.classes.person.id }, target: { id: model.classes.bloodgroup.id }})
];
_.each(model.relations, function(r) { model.graph.addCell(r); });

service.dslToClass();

});