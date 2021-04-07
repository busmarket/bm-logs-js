![](https://login.bm.parts/static/img/bm_logo_.svg)

# JS client for collecting logs
``
STANDARD OF JOURNALS FOR INTERNAL SERVICES - BM Parts
``

### Installation
```
npm i @busmarket/bm-logs-js
```

### Overview

Using JavaScript:

```js
const BmLogs = require('@busmarket/bm-logs-js');
const internalLogger = new BmLogs({filename: `log__${Date.now()}`});
```

Using TypeScript:

```typescript
import BmLogs = require("@busmarket/bm-logs-js");
const internalLogger = new BmLogs({filename: `log__${Date.now()}`});
```
