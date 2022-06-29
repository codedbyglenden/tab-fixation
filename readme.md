<img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/TheOneAndOnlyZulu/tab-fixation"> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/tab-fixation" /> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/tab-fixation" />
[![ES Lint](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/eslint.yml/badge.svg)](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/codeql-analysis.yml)

# About Tab Fixation

Tab Fixation is a small focus trap library coded in Vanilla JS & bundled up with rollup. 


## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | 
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Installing

Using npm:

```bash
$ npm install tab-fixation
```

Using yarn:

```bash
$ yarn add tab-fixation
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/tab-fixation"></script>
```

## Example

```js

import {initFixation, removeFixation} from 'tab-fixation';

if ( document.getElementById( 'parent_element' ) ) {

	// Init tab fixation.
	initFixation( 'parent_element' );

	// Remove tab fixation.
	removeFixation( 'parent_element' );
}

```

### Codepen Example

```html
https://codepen.io/TheOneAndOnlyZulu/pen/OJvPPrZ
```

## Objectives

This package aims to be:

- Fully accessible: Complying to the latest <a href="https://www.w3.org/TR/WCAG21/">WCAG guidelines</a>, to AAA standard.
- Lightweight: Website load times are key, not only to the ranking of your site, but the user experience. This package will always remain as small as possible, & never weigh you down.


## Help me, I'm stuck!

Pop over to the <a href="https://github.com/TheOneAndOnlyZulu/tab-fixation/discussions">discussions board</a>.

## I've got an idea?

Got ideas on how to improve this package, but not sure how to persue them? Head over to the <a href="https://github.com/TheOneAndOnlyZulu/tab-fixation/discussions">discussion section</a> of the repo, or if you've got the know how create a pull request.
