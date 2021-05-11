# React LifeCycle Methods

- What is a LifeCycle Method?

Stages or Phases of a component

Pre-mount

- constructor (or state = {})

Mounting

- static getDerivedStateFromProps(props, state)
- render()
- componentDidMount() => gets called after it mounts a comp and after the initial render
  => initialize your fetch requests

Updating

- shouldComponentUpdate(nextProps, nextState) => return a boolean

UnMounting

- componentWillUnMount() => cleanup method for removing components

---

Normal flow

```javascript
  state = {
    something: "something"
  }

  // intial render

  componentDidMount() {
    // change our state
  }

  // triggers a rerender with the new state

```

[React LifeCycle](https://reactjs.org/docs/react-component.html)

[React State And LifeCycle](https://reactjs.org/docs/state-and-lifecycle.html)
