import $ from 'jquery';
import {createStore} from 'reflux';

import Actions from '../Actions';

export default createStore ({
  listenables: [Actions],

  triggerChange: function() {
    this.trigger('change', this.lists);
  },

  addToDo: function(text) {
    let check = false;
    $.ajax({
      url: '/api/addtodo',
      type: 'POST',
      dataType: 'json',
      data: {text, check},
      success: function(res) {
        console.log(res);
        this.lists = res;
        this.triggerChange();
      }.bind(this)
    });
  },

  getToDo: function() {
    $.ajax({
      url:'/api/gettodo',
      type: 'GET',
      dataType: 'json',
      success: function(res) {
        this.lists = res;
        this.triggerChange();
      }.bind(this)
    });
  },

  updateToDo: function(id, check, text) {
    $.ajax({
      url: '/api/updatetodo',
      type: 'PUT',
      dataType: 'json',
      data: {id, check, text},
      success: function(res) {
        console.log('sucessful put: ' + res);
      }.bind(this)
    });
  }, 

  delToDo: function(id) {
    $.ajax({
      url: '/api/deltodo',
      type: 'DELETE',
      dataType: 'json',
      data: {id},
      success: function(res) {
        console.log('sucessful delete');
        this.lists = res;
        this.triggerChange();
      }.bind(this)
    });
  }, 

  clear: function() {
    console.log('clear store');
    $.ajax({
      url: '/api/delalltodo',
      type: 'DELETE',
      dataType: 'json',
      success: function(res) {
        console.log('sucessful delete all');
        this.lists = res;
        this.triggerChange();
      }.bind(this)
    });
  }
 
});
