1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: .getElementById()- It selects a single element by the id name. It works for specific id in the whole webpage. It shows single HTML element and shows null if doesn't exists according the given id.

.getElementsByClassName()- It is used for select all elements under a same class name. We can select or modify multiple elements by using getElementsByClassName.

.querySelector()- If we need to get any HTML elements from tag,id or class we can use querySelector.It selects the first element that matches a CSS selector.

.querySelectorAll()-  It selects all the targeted HTML elements. we can get the elements loop through querySelectorAll.

2.How do you create and insert a new element into the DOM?

Answer:In DOM we can use .createElement() method to  create a new HTML element. We need to write any tag under " " as like string.We can customize any elements by setting its properties.

Also there are many methods for inserting new element into DOM.Here, appendChild() is used to add the element as the last child of the parent node. prepend() its used for inserts the element as the first child node of a parent node. 
And for specific positioning we can use insertBefore() method. Also we can insert text and multiple elements at once by using append() method.

3.What is Event Bubbling and how does it work?

Answer: It is the reaction of any events action like clicks, mouseover or key presses etc. The event firstly appeared on the targeted element then moves upward to its parent elements and continue the process through the whole html elements. For example, if there any button under a div, the event first appear on the button itself, then the event bubbles up to its parent div, and after that it will appear to the grandparent div. 

4.What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a very useful process in Javascript. Normally we have to use many event listeners to control the events.But instead of attaching multiple event listeners to individual child elements, we can attach a single event listener to a parent element. In handling multiple event listeners it seems difficulties but this way, we can manage all child events from a single place. Instead of creating and storing numbers of separate event listeners, we can only need one, which is important for applications with many interactive elements.

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:The preventDefault() method is used to stop the browser's default action of an element from happening.For example if I click on any link normally it will take to the another page. If I use preventDefault() then it will not open or take to the another page.

The stopPropagation() method is used to stop the parent element from accessing the event.Normally, when we click on a child element, the event also moves to its parent, grandparent's elements. If we use stopPropagation(), the event will be handled only by the element where it occurred, and it will not reach any parent elements.

