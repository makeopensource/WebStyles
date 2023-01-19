# MOS WebStyles

A collection of web stylesheets for developing MakeOpenSource web applications
that have a consistent look and feel.

To use the full capabilities of WebStyles in an HTML page, use 
[JSDelivr](https://www.jsdelivr.com/) as follows:

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/makeopensource/WebStyles/dist/css/webstyles.css">
        ...
    </head>
    <body>
        ...
        <script src="https://cdn.jsdelivr.net/gh/makeopensource/WebStyles/dist/js/webstyles.js"></script>
    </body>
</html>
```

Notice the location of the linked stylesheet. Ideally, you will want to override
or add to the existing stylesheet, which means that any other linked resources
should be added **after** the current one.
