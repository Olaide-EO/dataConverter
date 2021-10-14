### Explain how prototypal inheritance works

This is an extremely common JavaScript interview question. All JavaScript objects have a `__proto__` property, that is a reference to another object, which is called the object's "prototype". When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of [delegation than inheritance](https://davidwalsh.name/javascript-objects).

#### Example of Prototypal Inheritance

We already have a build-in `Object.create`, but if you were to provide a polyfill for it, that might look like:

```js
if (typeof Object.create !== 'function') {
  Object.create = function (parent) {
    function Tmp() {}
    Tmp.prototype = parent;
    return new Tmp();
  };
}

const Parent = function () {
  this.name = 'Parent';
};

Parent.prototype.greet = function () {
  console.log('hello from Parent');
};

const child = Object.create(Parent.prototype);

child.cry = function () {
  console.log('waaaaaahhhh!');
};

child.cry();
// Outputs: waaaaaahhhh!

child.greet();
// Outputs: hello from Parent
```

Things to note are:

- `.greet` is not defined on the _child_, so the engine goes up the prototype chain and finds `.greet` off the inherited from _Parent_.
- We need to call `Object.create` in one of following ways for the prototype methods to be inherited:
  - Object.create(Parent.prototype);
  - Object.create(new Parent(null));
  - Object.create(objLiteral);
  - Currently, `child.constructor` is pointing to the `Parent`:

```js
child.constructor
ƒ () {
  this.name = "Parent";
}
child.constructor.name
"Parent"
```

- If we'd like to correct this, one option would be to do:

```js
function Child() {
  Parent.call(this);
  this.name = 'child';
}

Child.prototype = Parent.prototype;
Child.prototype.constructor = Child;

const c = new Child();

c.cry();
// Outputs: waaaaaahhhh!

c.greet();
// Outputs: hello from Parent

c.constructor.name;
// Outputs: "Child"
```

###### References

- http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
- https://www.quora.com/What-is-prototypal-inheritance/answer/Kyle-Simpson
- https://davidwalsh.name/javascript-objects
- https://crockford.com/javascript/prototypal.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
