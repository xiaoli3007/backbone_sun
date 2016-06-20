/**
 * Created by kerovieux on 16/5/1.
 */
import $ from 'jquery';

import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

import ListHbs from './views/list.hbs';
import IndexHbs from './views/index.hbs';
import HeadHbs from './views/head.hbs';
import NavHbs from './views/nav.hbs';
import FootHbs from './views/foot.hbs';
export default {
    List:Marionette.ItemView.extend({
        template: ListHbs,
        serializeData() {

            return {
                data:this.model
            };
        }
    }),

    Home:Marionette.ItemView.extend({
        template: IndexHbs,
        ui: {
            showBtn: '.btn_show'
        },
        events: {
            'click @ui.showBtn': function (e) {
                    alert("我是弹窗");
            }
        },
        serializeData() {

            return {
                data:this.model
            };
        }
    }),

    Head:Marionette.ItemView.extend({
        template: HeadHbs,
        serializeData() {
        }
    }),

    Nav:Marionette.ItemView.extend({
        template: NavHbs,
        serializeData() {


        }
    }),

    Foot:Marionette.ItemView.extend({
        template: FootHbs,
        serializeData() {


        }
    }),
}