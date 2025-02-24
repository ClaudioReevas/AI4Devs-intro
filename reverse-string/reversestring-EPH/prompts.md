### IA utilizada: v0 (Vercel) - https://v0.dev/

### Prompt:

Act as an experienced web developer with extensive knowledge of JavaScript, HTML and CSS.

I want you to make a small JavaScript application, which has an input where the user can enter any text he wants and the application should display the inverse of the entered text and display it in another box.

For example: if the user enters `AI4Devs`, it should return `sveD4IA`.

I want you to use this HTML file as a base:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

And add all the necessary JavaScript code to the “script.js” file.

I would also like you to use a nice and friendly interface, using a CSS library like Tailwindcss.

---

Ok, thank you, looks nice.
Now, to make it more interesting I want it to allow to reverse the text only when at least 3 characters have been entered. If there are not yet 3 characters entered and the user press the button, it should display in the interface a text warning to the user.

---

Perfect! Now to make it have a better UX, I don't want the need to press any button. So I want that the text is reversed in every keystroke of the user. Don't forget that the text should only be reversed if the text has at least 3 characters.
