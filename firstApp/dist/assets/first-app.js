"use strict";



define('first-app/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _firebase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var inject = Ember.inject;
    exports.default = _firebase.default.extend({
        firebase: inject.service()
    });
});
define('first-app/app', ['exports', 'first-app/resolver', 'ember-load-initializers', 'first-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define("first-app/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aBsk9X4f", "block": "{\"statements\":[[11,\"nav\",[]],[15,\"class\",\"navbar navbar-default\"],[13],[0,\"\\n  \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav\"],[13],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"nav-item\"],[13],[6,[\"link-to\"],[\"home\"],null,{\"statements\":[[0,\"Home\"]],\"locals\":[]},null],[14],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"nav-item\"],[13],[6,[\"link-to\"],[\"examples\"],null,{\"statements\":[[0,\"examples\"]],\"locals\":[]},null],[14],[0,\"\\n      \"],[11,\"li\",[]],[15,\"class\",\"nav-item\"],[13],[6,[\"link-to\"],[\"todo\"],null,{\"statements\":[[0,\"todo\"]],\"locals\":[]},null],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "first-app/application/template.hbs" } });
});
define('first-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('first-app/examples/controller', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        showlist: false,
        actions: {
            show: function show() {
                this.set('showList', true);
            },
            hide: function hide() {
                this.set('showList', false);
            }
        },
        people: [{
            name: 'Jordan Houston',
            age: '5 April 1975',
            alias: 'Juicy J',
            hometown: 'Memphis, Tennessee'
        }, {
            name: 'Patrick Houston',
            age: '8 February 1973',
            alias: 'Project Pat',
            hometown: 'Memphis, Tennessee'
        }, {
            name: 'Paul Beauregard',
            age: '12 January 1975',
            alias: 'DJ Paul',
            hometown: 'Memphis, Tennessee'
        }]
    });
});
define('first-app/examples/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("first-app/examples/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KO8qRSSP", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"jumbotron\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[15,\"class\",\"text-center\"],[13],[0,\"This is the Example Page!\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showList\"]]],null,{\"statements\":[[0,\"    \"],[11,\"h2\",[]],[15,\"class\",\"text-center\"],[13],[0,\"showList is set to true!\"],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"hide\"]],[13],[0,\"Hide\"],[14],[0,\"\\n    \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"people\"]]],null,{\"statements\":[[0,\"        \"],[11,\"li\",[]],[13],[1,[28,[\"person\",\"name\"]],false],[14],[0,\"\\n        \"],[11,\"ul\",[]],[13],[0,\"\\n            \"],[11,\"li\",[]],[13],[1,[28,[\"person\",\"age\"]],false],[14],[0,\"\\n            \"],[11,\"li\",[]],[13],[1,[28,[\"person\",\"alias\"]],false],[14],[0,\"\\n            \"],[11,\"li\",[]],[13],[1,[28,[\"person\",\"hometown\"]],false],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[\"person\"]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"h2\",[]],[15,\"class\",\"text-center\"],[13],[0,\"showList is set to false!\"],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"show\"]],[13],[0,\"Show\"],[14],[0,\"\\n\"]],\"locals\":[]}],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "first-app/examples/template.hbs" } });
});
define('first-app/helpers/app-version', ['exports', 'first-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('first-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('first-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('first-app/home/controller', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        content: 'this is the some filter content for container.',
        h1: 'jumbotron',
        body: 'container',
        spImg: '/assets/passed.png',
        responsive: 'img-responsive'
    });
});
define('first-app/home/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("first-app/home/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YV96dhB5", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"h1\"]]]]],[13],[0,\"\\n    \"],[11,\"h2\",[]],[15,\"class\",\"text-center\"],[13],[0,\"This is the Jumbotron!\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"body\"]],\" text-center\"]]],[13],[0,\"\\n    \"],[11,\"p\",[]],[13],[1,[26,[\"content\"]],false],[14],[0,\"\\n    \"],[11,\"img\",[]],[16,\"src\",[34,[[26,[\"spImg\"]]]]],[16,\"class\",[34,[[26,[\"responsive\"]]]]],[15,\"alt\",\"SitePoint Logo\"],[13],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "first-app/home/template.hbs" } });
});
define('first-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'first-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('first-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('first-app/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('first-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('first-app/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberfire.default;
});
define('first-app/initializers/export-application-global', ['exports', 'first-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('first-app/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('first-app/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('first-app/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("first-app/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('first-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('first-app/router', ['exports', 'first-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home', {
      path: '/'
    });
    this.route('examples');
    this.route('todo');
  });

  exports.default = Router;
});
define('first-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('first-app/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _firebaseApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebaseApp.default;
});
define('first-app/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});
define("first-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5eY09mIv", "block": "{\"statements\":[[1,[26,[\"welcome-page\"]],false],[0,\"\\n\"],[0,\"\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "first-app/templates/application.hbs" } });
});
define('first-app/todo/controller', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            createTodo: function createTodo() {
                var newTodo = this.store.createRecord('todo', {
                    name: this.get('name'),
                    date: new Date()
                });
                newTodo.save();
                this.set('name', '');
            },
            deleteTodo: function deleteTodo(todo) {
                todo.destroyRecord();
            }
        }
    });
});
define('first-app/todo/model', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        date: _emberData.default.attr('date')
    });
});
define('first-app/todo/route', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return this.store.findAll('todo');
        }
    });
});
define("first-app/todo/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lRPCeGLA", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"jumbotron\"],[13],[0,\"\\n    \"],[11,\"h2\",[]],[15,\"class\",\"text-center\"],[13],[0,\"Add a todo!\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"panel panel-default\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"Todo\"],[13],[0,\"Add a ToDo!\"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"value\",\"placeholder\"],[[28,[\"name\"]],\"Add a Todo\"]]],false],[0,\"\\n                \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"createTodo\"]],[13],[0,\"Add Todo\"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n                    \"],[11,\"ul\",[]],[13],[0,\"\\n                        \"],[11,\"li\",[]],[13],[0,\"\\n                            \"],[1,[28,[\"todo\",\"name\"]],false],[0,\"\\n                            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"deleteTodo\",[28,[\"todo\"]]]],[13],[0,\"Delete Todo\"],[14],[14],[0,\"\\n                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[\"todo\"]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "first-app/todo/template.hbs" } });
});
define('first-app/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});


define('first-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'first-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("first-app/app")["default"].create({"name":"first-app","version":"0.0.0+32b051ad"});
}
//# sourceMappingURL=first-app.map
