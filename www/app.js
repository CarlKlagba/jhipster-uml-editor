// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app 	: '../app',
        geometry: 'geometry',
        vectorizer: 'vectorizer',
        jquery 	: 'jquery',
        lodash	: 'lodash',
        joint	: 'joint.clean',
        backbone: 'backbone',

        dsl_parser 		: 'jhipster-uml/lib/dsl/dsl_parser',
        entitiescreator	: 'jhipster-uml/lib/entitiescreator',
        scheduler		: 'jhipster-uml/lib/scheduler',
        parser_factory	: 'jhipster-uml/lib/editors/parser_factory'
    },

     map: {
        "*": {
            underscore: "lodash"
        }
    },

	shim: {   
	    backbone: {
	        //These script dependencies should be loaded before loading backbone.js.
	        deps: ['lodash', 'jquery'],
	        //Once loaded, use the global 'Backbone' as the module value.
	        exports: 'Backbone'
	    },
	    lodash: {
	        exports: '_'
	    },
	    joint: {
	        deps: ['geometry', 'vectorizer', 'jquery', 'lodash', 'backbone'],
	        exports: 'joint',
	        init: function(geometry, vectorizer, lodash) {
	            // JointJS must export geometry and vectorizer otheriwse
	            // they won't be exported due to the AMD nature of those libs and
	            // so JointJS would be missing them.
	            this.g = geometry;
	            this.V = vectorizer;
	        }
	    }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main', ]);

