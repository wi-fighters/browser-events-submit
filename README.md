# Browser events

1. Add a new field to the existing form.

    a. It should only accept a number.
    b. Label it `Font size in em:`

2. When the form is submitted, execute a submit event handler called `changeDom`. This handler should:

    a. Grab the value of the text field and use it to change background color of the `#square`.

    b. Grab the value of the number field and use it to change size of the `p` inside `#square` (don't edit any of the HTML outside the form)
