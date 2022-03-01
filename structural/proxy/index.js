function networkFetch(url) {
    return `${url} - Ответ с сервера`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, context, args) {
        const url = args[0];

        if (cache.has(url)) {
            return `${url} - Ответ из кеша`;
        }

        cache.add(url);

        return Reflect.apply(target, context, args);
    }
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));
