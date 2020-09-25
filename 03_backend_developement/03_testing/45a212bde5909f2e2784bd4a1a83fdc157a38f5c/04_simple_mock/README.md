# Simple Mock

## Context and Objectives

In this exercise, we have a `helloSailor` function that work like this:

```typescript
helloSailor("Captain Blackbeard");
// Howdy Captain Blackbeard!
helloSailor();
// Howdy Sailor! Good day to you!
```

This function is only printing the message and not returning it and this is what we wanted.
However, we still want to test the function, without modifying it.
To that end, you will need to mock `console.log`.

Bonus: Make it so the message are not displayed when executing the tests.

## Coverage

You should aim for 100% coverage here.
