# CE Express Security

This package allows developers to easily use CheaprEats unified authorization system with their express applications.

You must be registered as a CheaprEats developer to use this package, you must also obtain your OAuth client ID and secret.

## Quick Start

First make sure you have `express-session` installed, this is required to maintain a login session.

Install the security module by running

```bash
$ npm install @cheapreats/express-security
```

Currently, this package only handles OAuth, so you can import a function called `configureOAuth`.

```javascript
import {configureOAuth} from '@cheapreats/express-security'
```

Configure your application, for example, the following code will require OAuth for all paths starting with `/secure`.

```javascript
configureOAuth(app, {
    path: /^\/app.*$/,
    clientId: 'abcd...' // Your OAuth client ID
});
```

Within these paths, you can now access the variable `req.user_id` is user is authorized.

----

Copyright © CheaprEats Inc. 2020

POC: jun.zheng@
