/**
 * Tab Fixation, the focus trap library.
 * 
 * @version 2.0.0
 */

/**
 * Tab Fixation class
 * 
 * @since 2.0.0
 */
class TabFixation {

    /**
     * Initialise base variables.
     * 
     * @since 2.0.0
     * @return void
    */
    constructor() {
        this.selectableItems  = [];
        this.firstFocusableEl = null;
        this.lastFocusableEl  = null;
        this.parentEl         = null;
        this.queyrParams      = 'a[href]:not([disabled]),button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex="0"],video[controls]';
    
        this.eventHandler = this.loop.bind(this);
    }

    /**
     * Creates a focus trap so the user can't tab the rest of the page while the modal is open.
     *
     * @param {DOM Node} parentSelector The Parent node to contain focus.
     * 
     * @since 1.0.0
     * @return void
    */
    init( parentSelector ) {

        this.parentEl = parentSelector;

         // Query all the child items that can be tab to.
        this.selectableItems = this.parentEl.querySelectorAll(
            this.queyrParams
        );

        // The first & last item in the list so we can skip to them at the start/end of the trap.
        this.firstFocusableEl = this.selectableItems[0];
        this.lastFocusableEl  = this.selectableItems[ this.selectableItems.length - 1 ] ? this.selectableItems[ this.selectableItems.length - 1 ] : this.firstFocusableEl;
        
        // If the first focus doesn't exist we do nothing.
        if ( this.firstFocusableEl ) {
            this.focus( this.firstFocusableEl );

            window.addEventListener( 'keydown', this.eventHandler, false );
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
    loop(e) {

        // Define consts for reuse.
        const activeEl = document.activeElement;

        // If the user clicks the tab key.
        if ( e.key === 'Tab' || e.keyCode === 9 ) {

            if ( ! this.parentEl.contains( activeEl ) ) {
                this.focus( this.firstFocusableEl, e );
            }

            // If the user clicks shift + tab (go to the previous tab item)
            if ( e.shiftKey ) {

                // If first item, and the user wants to go back select the last item in the trap.
                if  ( activeEl === this.firstFocusableEl ) {
                    this.focus( this.lastFocusableEl, e );
                }
            } else {

                // We're at the last item, select the first item in the trap.
                if ( activeEl === this.lastFocusableEl ) {
                    this.focus( this.firstFocusableEl, e );
                }
            }
        }
    }

    /**
     * Focus the element provided & prevent default.
     *
     * @param {Node} element Element to focus.
     * @param {Node} default Prevent default functionality.
     * 
     * @since 1.2.0
     * @return void
     */
    focus( element, e = false ) {
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
    remove() {
        window.removeEventListener( 'keydown', this.eventHandler );
    }
}

export default TabFixation;