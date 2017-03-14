import $ from 'jquery';

export function inject(url) {
  // Load icons and inject them into beginning of the DOM.
  $.get(url).done((doc) => {
    $('<div />')
      .css({
        width: 0,
        height: 0,
        visibility: 'hidden'
      })
      .append($('svg', doc))
      .prependTo('body');
  });
}

export default {
  inject
};
