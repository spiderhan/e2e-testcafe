import { RequestLogger, RequestMock, RequestHook  } from 'testcafe';

        class testRequestHook extends RequestHook {
            constructor() {
                // No URL filtering applied to this hook
                // so it will be used for all requests.
                super();
            }

            onRequest (e) {
               console.log(e)
               // e.requestOptions.headers['X-THEHUTSRV'] = '230';
            }
        }


        const block = RequestMock()
            .onRequestTo(/\/gtm|google|adrum|facebook|criteo|dwin|bing|liveChat|liveperson|columbo|tracking/g)
            .respond('');

export { testRequestHook, block };
