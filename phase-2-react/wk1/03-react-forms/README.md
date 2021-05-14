# React State and Events

State ? Is an OBJECT

Gives object different properites.
Properties of a component
current values of something we know will change inside the component

Props ? Is an OBJECT

Properites are passed down from parent to child comp
Props are IMMUTABLE at the child level, it should not be changed in the child

Class comp can hold state, while a functional comp cannot\*

\*until react hooks

## Events in React

In Vanilla JS

```javascript
const btn = document.getElementById("btn-1")
btn.addEventListener("click", handleClick)
```

```jsx
  <button onClick={handleOnClick}>
    Click Me!
  </button>
```

The goal on any handler is to change the state

Whenever you change the state, that component tree will rerender

sync

func1() => took .00001ms
fetch(url) => 10 sec
func2()
func1, fetch, func2

async

func1() => took .00001ms
fetch(url) => 10 sec
func2()
func1, func2, fetch
