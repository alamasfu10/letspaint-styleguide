import $ from 'jquery';
import forOwn from 'lodash/forOwn';

const knownMaterials = {};

/*
    Init a material on all DOM elements matching the given selector.
 */

export function init(selector, createMaterial, domObject) {
  $(selector, domObject).each(function() {
    const $el = $(this);
    if ($el.data('material')) {
      return;
    }

    $el.data('material', createMaterial(this));
  });

  // store material
  if (!knownMaterials[selector]) {
    knownMaterials[selector] = createMaterial;
  }
}

// reapply all known materials to a DOM object and his children.
export function initKnownModules(domObject) {
  forOwn(knownMaterials, (material, selector) => {
    init(selector, material, domObject);
  });
}
