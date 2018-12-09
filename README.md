This repository contains semantic data for Warlock versions. Some of it is generated from (closed) source code, some is manually maintained. It's used by the [handbook](https://www.warlockbrawl.com/handbook/) on warlockbrawl.com to drive the references.

Internally, it uses the code name `lightning` for the original WC3 Warlock versions, hence that directory name. (As in, `boomerang` for the Dota 2 version, `homing` after that.)

It comes with a node.js interface to interact with patch data:

```js
const { lightningLatest, Patch } = require('warlock-patches');
const patch = new Patch(lightningLatest);
const fireball = patch.getById('spell', 'fireball');
```
