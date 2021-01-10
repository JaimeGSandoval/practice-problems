// In the proxy design pattern one object acts as an interface to another object. The proxy object sits between the client of an object and the object itself and protects the access to that object. The proxy acts as a guardian of the object (also called 'the real subject') and tries to have the real subject do as little work as possible.

// One example use would be something called lazy initialization. Imagine that initializing the real subject is expensive, and it happens that the client initializes it but never actually uses it. In this case the proxy can help by being the interface to the real subject. The proxy receives the initialization request but never passes it on until it's clear that the real subject is actually used.

// So the proxy object is a placeholder for another object which proxy controls access to. So instead of using the object directly, we use the proxy and the proxy uses that object.

// also want to mention that if you were to follow such a pattern, be aware that you need to check for outdated data, especially if you're working with data that changes a lot. One way to do that is to also attach a Date object to that specific data you're pulling in, and add some time limit for how long something will be stored in the proxy - which will be checked every time you try to fetch something via it.

// Different types of proxies:
// 1. Remote: They are responsible for representing the object located remotely. Talking to the real object might involve marshalling and unmarshalling of data and talking to the remote object. All that logic is encapsulated in these proxies and the client application need not worry about them.

// 2. Virtual: These proxies will provide some default and instant results if the real object is supposed to take some time to produce results. These proxies initiate the operation on real objects and provide a default result to the application. Once the real object is done, these proxies push the actual data to the client where it has provided dummy data earlier. Controls access to some resource that's expensive to create. Caching.

// 3. Protection: If an application does not have access to some resource then such proxies will talk to the objects in applications that have access to that resource and then get the result back.

// External API/ Network requests
function CryptoCurrencyAPI() {

  this.getValue = function (coin) {
    console.log('Calling external API...');
    switch (coin) {
      case 'Bitcoin':
        return '$8,500'
        break;
      case 'Litecoin':
        return '$50'
        break;
      case 'Etherium':
        return '$175'
        break;
    }
  }
}

/////////////

// const api = new CryptoCurrencyAPI();

// Simulate expensive network requests
// console.log(api.getValue('Bitcoin'));
// console.log(api.getValue('Litecoin'));
// console.log(api.getValue('Etherium'));


function CryptoCurrencyProxy() {
  this.api = new CryptoCurrencyAPI();
  this.cache = {};

  this.getValue = function (coin) {
    if (!this.cache[coin]) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  }
}

const proxy = new CryptoCurrencyProxy();
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Etherium'));

// Gets the cached values. No network requests.
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Etherium'));
