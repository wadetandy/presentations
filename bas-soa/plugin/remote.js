(function(){
    var getRemoteTemplates = function() {

        var sections = document.querySelectorAll( '[data-remote]'),
            section;

        for( var j = 0, jlen = sections.length; j < jlen; j++ ) {

            section = sections[j];

            if( section.getAttribute('data-remote').length ) {

                var xhr = new XMLHttpRequest(),
                    url = section.getAttribute('data-remote');

                xhr.onreadystatechange = function () {
                    if( xhr.readyState === 4 ) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            section.innerHTML = xhr.responseText
                        } else {
                            section.innerHTML = '<section data-state="alert">ERROR: The attempt to fetch ' + url + ' failed with the HTTP status ' + xhr.status +
                                '. Check your browser\'s JavaScript console for more details.';
                        }
                    }
                };

                xhr.open('GET', url, false);
                try {
                    xhr.send();
                } catch (e) {
                    alert('Failed to get the Template file ' + url + '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' + e);
                }

            }
        }
    };

    getRemoteTemplates();
})();
