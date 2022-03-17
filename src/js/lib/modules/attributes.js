import $ from '../core';

$.prototype.addAttr = function(name, value){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(name, value);
    }

    return this;
};

$.prototype.removeAttr = function(name){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].removeAttribute) {
            continue;
        }
        this[i].removeAttribute(name);
    }

    return this;
};

$.prototype.toggleAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name, value);
        }
    }
    return this;
};

$.prototype.getAttr = function(attributeName){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        return this[i].getAttribute(attributeName);
    }
    return this;
};