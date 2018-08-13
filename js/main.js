// Check for SW support

if ('serviceWorker' in navigator) {
    console.log('Service Worker Supported');
    // register a SW
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_site.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(eerr => console.log('Service Worker Error'));
    });

}