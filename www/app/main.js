define([	"app/messages",	"jquery", 	"joint"],
function (	messages , 		$,			joint) {
   
var graph = new joint.dia.Graph;

var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 800,
    height: 600,
    gridSize: 1,
    model: graph
});


var uml = joint.shapes.uml;

var classes = {

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
});