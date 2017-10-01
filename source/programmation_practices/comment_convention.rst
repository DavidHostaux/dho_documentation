******************
Comment convention
******************

Fonction commentary
*******************

The commentary of a fonction is name "specification".
It's used to kown what need the function, what change the function, what do and is the result of the function without read the code of the function.
So, you need to describe 3 think:

* REQUIRES: It's use to see what need the function. Generally, that's describe what are the variable passed in the function and what they need to be.
* MODIFIES: It's use to tell what change the function. When the function change the value of an external variable or other, it's required to mention it in this section.
* EFFECTS: It's use to say what do the function (if not say by the modifies) and what return the function.

It use to know what do, need, return the function without read his code.

Example:
========

.. literalinclude:: includes/js/cc_fonction_commentary.js

Other commentary
****************

When you do some code that need to have an explication, you can comment it with one line or several line.
The commentary will not be on the same line of a code line.

Example:
========

.. literalinclude:: includes/js/cc_other_commentary.js
