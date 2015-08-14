findAndReplace('soft serve ice cream', 'creemee', document);
findAndReplace('soft-serve ice cream', 'creemee', document);
findAndReplace('soft serve', 'creemee', document);
findAndReplace('soft-serve', 'creemee', document);
findAndReplace('Soft Serve Ice Cream', 'Creemee', document);
findAndReplace('Soft-Serve Ice Cream', 'Creemee', document);
findAndReplace('Soft Serve', 'Creemee', document);
findAndReplace('Soft-Serve', 'Creemee', document);
findAndReplace('Soft Serves', 'Creemees', document);
findAndReplace('soft serves', 'creemees', document);


function findAndReplace(a, b, el) {
    if (!el) el = document.body;
    var nodes = el.childNodes;
    for (var n = 0; n < nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            nodes[n].textContent = nodes[n].textContent.replace(a, b);
        } else {
            findAndReplace(a, b, nodes[n]);
        }
    }
}
