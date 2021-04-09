# Shyriiwook

`shyriiwook` is a JS library to translate human language to [Shyriiwook](https://starwars.fandom.com/wiki/Shyriiwook), the native language of the Wookiees.

Based on the original python implementation used in [swapi.dev API](https://github.com/phalt/swapi/blob/master/resources/renderers.py).

The current implementation is considering also 'null',
as well as uppercase characters.

## Installation

Install with npm:

```bash
npm install --save shyriiwook
```

## Usage

```javascript
const shyriiwook = require("shyriiwook");

shyriiwook.translate('Hello world!') // => 'Acwoananoo ohoorcanwa!'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)