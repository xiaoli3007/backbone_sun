import $ from 'jquery';
import _ from 'lodash';
import localforage from 'localforage';
window.jQuery = window.$ = $;
require('bootstrap');
import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

import Common from './common';
import Views from './views';
//var layoutView = new Views.List();
export default Backbone.Router.extend({

  routes: {
    '': 'index',
    'index': 'index',
    'list': 'list'
  },

  initialize() {
    $('body').append('<div id="js-app"></div>');
  },

  index() {

    $.ajax({
          url:Common.config.domain + 'api/mobile/index2'
        })
        .done(function (res) {
          let data = JSON.parse(res);
        //alert(data.slide[0]['picurl']);
          let header = new Views.Head({}).render();
          let Nav = new Views.Nav({}).render();
          let HomeView = new Views.Home({model:data}).render();
          let Foot= new Views.Foot({}).render();


          $('#js-app').empty().append(header.$el);
          $('#js-app').append(Nav.$el);
          $('#js-app').append(HomeView.$el);
          $('#js-app').append(Foot.$el);


        });

  },
  list() {

    $.ajax({
          url:Common.config.domain + 'api/mobile/list2'
        })
        .done(function (res) {

          let data = JSON.parse(res);
         // alert(data.list);
          let header = new Views.Head({}).render();
          let Nav = new Views.Nav({}).render();
          var ListView = new Views.List({model:data.list}).render();
          let Foot= new Views.Foot({}).render();

          $('#js-app').empty().append(header.$el);
          $('#js-app').append(Nav.$el);
          $('#js-app').append(ListView.$el);
          $('#js-app').append(Foot.$el);


          //$('.bg_overlay').delay(500).fadeOut()
        })




  }
  //about() {
  //  var helloView = new HelloView({
  //   template: _.template('Im the about page')
  //  }).render();
  //
  //  $('#js-app').empty().append(helloView.$el);
  //},


});
