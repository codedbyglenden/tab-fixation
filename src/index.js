/**
 * Tab Fixation, the focus trap library.
 * 
 * @version 1.0.0
 */

/**
 * Creates a focus trap so the user can't tab the rest of the page while the modal is open.
 *
 * @param {*} parentId The DOM ID of the div you wish to trap focus within.
 * 
 * @since 1.0.0
 * @return void
*/
export const initFixation = ( parentId ) => {
    
    // Query select the modal.
    const parentContainer = document.querySelector( '#' + parentId );
    
    const focusableEl = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';

    // Get all of the child items that can be tabbed to.
    const selectableItems = parentContainer.querySelectorAll(
        focusableEl
    );
    
    // The first & last item in the list so we can skip to them at the start/end of the trap.
    const firstFocusableEl = selectableItems[0];
    const lastFocusableEl = selectableItems[ selectableItems.length - 1 ];
    
    if ( firstFocusableEl ) {
        // Focus the first focusable item.
        firstFocusableEl.focus();
    }

    parentContainer.addEventListener( 'keydown', focusTrapLoop, false);
    
    parentContainer.firstFocusableEl = firstFocusableEl;
    parentContainer.lastFocusableEl  = lastFocusableEl;
}

/**
 * The loop functionality of the focus trap.
 *
 * @param e
 * 
 * @since 1.0.0
 * @return void
 */
const focusTrapLoop = (e) => {

    const firstFocusableEl = e.currentTarget.firstFocusableEl;
    const lastFocusableEl = e.currentTarget.lastFocusableEl;

    // If the user clicks the tab key.
    if (e.key === 'Tab' || e.keyCode === 9) {
        
        // If the user clicks shift + tab (go to the previous tab item)
        if ( e.shiftKey ) {

            // If first item, and the user wants to go back select the last item in the trap.
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else {

            // We're at the last item, select the first item in the trap.
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    }
};
    
/**
 * Removes a focus trap.
 * 
 * @param parentId The id of the node you are removing the focus trap on.
 * 
 * @since 1.0.0
 * @return void
 */
export const removeFixation = ( parentId ) => {
    document.getElementById( parentId ).removeEventListener( 'keydown', focusTrapLoop );
};