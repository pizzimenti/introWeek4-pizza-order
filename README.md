# Week 4 Project - Pizza Place - Objects and Prototype practice

## Description

A two-column web page that takes form data, captures it with jQuery methods, and uses that data as parameters to instantiate a JavaScript "pizza object". Price prototype methods are constructed to calculate and then display the price of the given object.

### By Brad Pizzimenti

## Future Features / Refactor

- The form would be better constructed with 'checkboxes' instead of 'select' fields.
- Size was originally conceived of as integer but this requires separate variables to handle strings for the actual size words to display and also makes the code less readable. It also requires parseInt since jQuery delivers the integers as strings anyway. So we're converting from string to int and back to string for no reason whatsoever. In the future such variables should remain strings throughout the business logic.

Copyright (c) 2016 Brad Pizzimenti
