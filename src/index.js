/**
 * Tab Fixation, the focus trap library.
 * 
 * @version 1.2.0
 */

/**
 * Creates a focus trap so the user can't tab the rest of the page while the modal is open.
 *
 * @param {DOM Node} parentSelector The Parent node to contain focus.
 * 
 * @since 1.0.0
 * @return void
*/
export const initFixation = ( parentSelector ) => {

    // Query all the child items that can be tab to.
    const selectableItems = parentSelector.querySelectorAll(
        'a[href]:not([disabled]),button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex="0"]'
    );

    // The first & last item in the list so we can skip to them at the start/end of the trap.
    const firstFocusableEl = selectableItems[0];
    const lastFocusableEl  = selectableItems[ selectableItems.length - 1 ];
    
    // If the first focus doesn't exist we do nothing.
    if ( firstFocusableEl ) {
        focus( firstFocusableEl );

        parentSelector.addEventListener( 'keydown', focusTrapLoop, false );
    
        parentSelector.firstFocus = firstFocusableEl;
        parentSelector.lastFocus  = lastFocusableEl;
    }
}

/**
 * The loop functionality of the focus trap.
 *
 * @param {Node} e The Parent Element.
 * 
 * @since 1.0.0
 * @return void
 */
const focusTrapLoop = (e) => {

    // Define consts for reuse.
    const activeEl = document.activeElement;

    // Select the first & last.
    const current          = e.currentTarget;
    const firstFocusableEl = current.firstFocus;
    const lastFocusableEl  = current.lastFocus;

    // If the user clicks the tab key.
    if ( e.key === 'Tab' || e.keyCode === 9 ) {
        
        // If the user clicks shift + tab (go to the previous tab item)
        if ( e.shiftKey ) {

            // If first item, and the user wants to go back select the last item in the trap.
            if  ( activeEl === firstFocusableEl ) {
                focus( lastFocusableEl, e );
            }
        } else {

            // We're at the last item, select the first item in the trap.
            if ( activeEl === lastFocusableEl ) {
                focus( firstFocusableEl, e );
            }
        }
    }
};

/**
 * Focus the element provided & prevent default.
 *
 * @param {Node} element Element to focus.
 * @param {Node} default Prevent default functionality.
 * 
 * @since 1.2.0
 * @return void
 */
const focus = (element, e = false) => {
    element.focus();
    e && e.preventDefault();
}
    
/**
 * Removes a focus trap.
 * 
 * @param {DOM Node} parentSelector The Parent node to remove focus from.
 * 
 * @since 1.0.0
 * @return void
 */
export const removeFixation = ( parentSelector ) => {
    parentSelector.removeEventListener( 'keydown', focusTrapLoop );
};