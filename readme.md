<img alt="GitHub package.json version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/v/codedbyglenden/tab-fixation"> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/tab-fixation" /> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/tab-fixation" />
[![ES Lint](https://github.com/codedbyglenden/tab-fixation/actions/workflows/eslint.yml/badge.svg)](https://github.com/codedbyglenden/tab-fixation/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/codedbyglenden/tab-fixation/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/codedbyglenden/tab-fixation/actions/workflows/codeql-analysis.yml)

# About Tab Fixation

**A simple yet powerful library that can help improve the accessibility of your website for visually impaired users.**

Tab-fixation is a lightweight vanilla JavaScript package that traps the user's keyboard focus so that they can only navigate between a select number of DOM nodes. This is particularly helpful for visually impaired users who may be using screen readers to navigate around your website, especially if you're using popup modals where users can find themselves tabbing through the entirety of the website while a modal is still open in front of them.

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
import tabFixation from 'tab-fixation';

// A button to start & end fixation.
const focusbutton       = document.getElementById( 'focus_parent_button' );
const removeFocusButton = document.getElementById( 'focus_parent_button' );

/**
 * This is the parent node you would like to focus.
 * Once you initialise focus using this node as a parameter,
 * clicking the tab key will only allow you to move the focus ring
 * amoungts focusable children of this element.
 */
const divToFocus = document.getElementById( 'parent_element' );

const focusTrap = new tabFixation();

/**
 * On click only allow the user to tab between
 * the child elements of "divToFocus". 
 */
focusbutton.addEventListener( 'click', () =>{
	// Init tab fixation.
	focusTrap.init( divToFocus );
}); 

/**
 * On Click remove the focus trap & allow the user to
 * continue tabbing through the site as they normally would.
 */
removeFocusButton.addEventListener( 'click', () =>{
	// Remove tab fixation.
	focusTrap.remove();
}); 
```

### Codepen Example

```html
https://codepen.io/codedbyglenden/pen/vYzgxNQ
```

## Objectives

This package aims to be:

- Fully accessible: Complying to the latest <a href="https://www.w3.org/TR/WCAG21/">WCAG guidelines</a>, to AAA standard.
- Lightweight: Website load times are key, not only to the ranking of your site, but the user experience. This package will always remain as small as possible, & never weigh you down.


## Help me, I'm stuck!

Pop over to the <a href="https://github.com/codedbyglenden/tab-fixation/discussions">discussions board</a>.

## I've got an idea?

Got ideas on how to improve this package, but not sure how to persue them? Head over to the <a href="https://github.com/codedbyglenden/tab-fixation/discussions">discussion section</a> of the repo, or if you've got the know how create a pull request.
