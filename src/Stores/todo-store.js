import $ from 'jquery';
import {createStore} from 'reflux';

import Actions from '../Actions';

export default createStore ({
  listenables: [Actions],

  addToDo: function(text) {
    console.log(text + " addtodo");
    $.ajax({
      url: '/api/addtodo',
      type: 'POST',
      dataType: 'json',
      data: {text},
      success: function(res) {
        console.log('sucessful post: ' + res);
      }.bind(this)
    });
  }

});
