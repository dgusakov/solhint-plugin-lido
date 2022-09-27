# solhint-plugin-lido

This [Solhint](https://github.com/protofire/solhint/) plugin that incorporates custom rules used in Lido finance

## Setup

First install the necessary packages:

```
npm install --save-dev solhint solhint-plugin-lido
```

Then add a `.solhint.json` configuration file:

```json
{
  "plugins": ["lido"],
  "rules": {
    "lido/fixed-compiler-version": "error"
  }
}
```

You can also set it to `warning` instead of `error` if you prefer that.
