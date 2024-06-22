---
title: Debouncing & throttling
description: What is debouncing & throttling? Explained with examples in JavaScript.
publishedDate: Sun, 16 Jun 2024 17:00:00 GMT+0100
lastUpdated: Sat, 21 Jun 2024 18:00:00 GMT+0100
categories:
    - concepts
    - computer-science
references:
    - https://kettanaito.com/blog/debounce-vs-throttle
    - https://www.freecodecamp.org/news/javascript-debounce-example/
---

## What is debouncing and throttling?

Debouncing and throttling are two concepts used to help limit the amount of function executions. They're extremely important to managing performance. They are used everywhere if you know where to look.

## What is throttling?

Throttling ensures that a function is only executed once within a set amount of time. It does this by setting a timer, where every execution of the function called within this period will be unsuccessful.

A good example of this would be in a video game. Let's say you're playing a combat game in which you press a key to punch. On the first key press, it executes successfully and your character punches. However, the punch animation takes 2 seconds to complete and subsequent presses shouldn't trigger the punch again. Here a throttler is used. After the first punch, a timer is set and any time that function is called within that timer period is unsuccessful.

### How is this implemented?

The throttle function itself operates something like this.

```js
function throttle(callback, delay) {
  let shouldWait = false // First call shouldn't have a delay

  if (!shouldWait) {
    callback() // Call function
    shouldWait = true // Set should wait to true after function called

    // A timeout that will allow the call to be made after the delay is
    // over by setting the shouldWait state.
    setTimeout(() => shouldWait = false, delay)
  }
}
```

This throttle function takes two parameters, the function to be delayed and the delay. We use a conditional statement to check against a state variable that dictates whether the function is executed. In the first execution, the `shouldWait` variable will be false, meaning the function will be executed and the `shouldWait` variable is set to true alongside a timer that will toggle it back to false after the given `delay`.

When it is first run, there is no delay set and the callback will be executed. After executing, the throttler will set a delay of `300ms`, every call will then check to see if the given time `300ms` has passed, if it hasn't the request won't be executed, if it has, then the call will be made and the timer set again.

This function example won't work however. As every time the throttle function is called, the variable will always be false as a new instance of the method has been created.

Here we want to use a closure, this will allow us to create a function that will persist the reference of the outer functions scope variables.

```js
function throttle(callback, delay) {
	let shouldWait = false // First call shouldn't have a delay

	return (..args) => {
			if (!shouldWait) {
				callback()
				shouldWait = setTimeout(() => shouldWait = false, delay)
			}
	}
}
```

## What is a debouncing?

Debouncing is where you restrict the calling of a function. Each call to a debounced function will set a delay and only execute after the given delay time has passed. The trick being that every time the function is called, the delay will be reset. It will only execute the last call of the function when the delay has completed.

The best real world example of this is your TV remote.

Have you ever held down the power button on your TV remote and it doesn't turn on until you let go? That's because the function executed from pressing a remote button is debounced to prevent unnecessary calls. When you're holding the button down, the action is being debounced and the delay timer reset. When you let go, after the debounce timer has completed, the last function to be executed will be successful.

The delay needs to be resolved/completed before the callback function is executed.
However, every time the debounced call is made, this timer is reset.

```js
function debounce(functionToCall, delay) {
  let timer

  return (...args) => {
    // Function that will be called after timer is finished
    const makeCall = () => {
      timer = null // Reset timer after successful call
      functionToCall(...args)
    }

    clearTimeout(timer) // Clear previous timeout

    timer = setTimeout(makeCall(), delay) // Set new timeout
  }
}
```

## TLDR;

A good way to look at it is that the throttler will set a delay after every successful event. So after the function has executed, the timer will be set again, and the function will only be executed after the given timer has expired. The debouncer however will set this delay after ***every call*** to the debouncer.

Throttle: An event where the delay is reset after a ***successful*** call.
Debounce: An event where the delay is reset on ***every*** call.
