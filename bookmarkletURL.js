function bookmarkletURL(repository, filename) {
    let url = "javascript:void((function(){" +
        "var e=document.createElement('script');" +
        "e.setAttribute('type','text/javascript');" +
        "e.setAttribute('charset','UTF-8');" +
        "e.setAttribute('src', 'https://pedro-otavio.github.io/" + repository + "/" + filename + "');" +
        "document.body.appendChild(e)})())";
    return url;
}