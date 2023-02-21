<img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/TheOneAndOnlyZulu/tab-fixation"> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/tab-fixation" /> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/tab-fixation" />
[![ES Lint](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/eslint.yml/badge.svg)](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/TheOneAndOnlyZulu/tab-fixation/actions/workflows/codeql-analysis.yml)

# About Tab Fixation

A simple yet powerful library that can help improve the accessibility of your website for visually impaired users.

Tab-fixation is a lightweight vanilla JavaScript package that traps the users keyboard focus, so thay they can only navigate between a select number of DOM nodes. This is particularly helpful for visually impaired users who may be using screen readers to navigate around your website. Especially if you're using popup modals, where users can find themselves tabbing through the entirity of the site, while a modal is still open infront of them. 

By isolating the user's focus and preventing them from getting lost or confused, you can create a more user-friendly experience that everyone can enjoy.

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

const focusbutton       = document.getElementById( 'focus_parent_button' );
const removeFocusButton = document.getElementById( 'focus_parent_button' );
const divToFocus        = document.getElementById( 'parent_element' );

if ( focus_parent_button && divToFocus ) {

	// Contain focus within the div with the id: parent_element.
	focusbutton.addEventListener( 'click', () =>{
		// Init tab fixation.
		initFixation( divToFocus );
	}); 
	
	// Remove focus from the div with the id: parent_element.
	removeFocusButton.addEventListener( 'click', () =>{
		// Remove tab fixation.
		removeFixation( divToFocus );
	}); 
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
