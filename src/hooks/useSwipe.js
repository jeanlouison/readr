import { useState, useEffect, useRef } from 'react';

const useSwipe = (ref, handlers, minDelta) => {

    const element = ref.current;

    let [ gesture, setGesture ] = useState('');
    let [ touches, setTouches ] = useState(null)
    let initialTouches = useRef(null);

    useEffect(() => {
    
        const handleTouchStart = event => {
            const currentTouches = getCurrentTouches(event, event.touches);
            setTouches(currentTouches);
            initialTouches.current = currentTouches;
        };
    
        const handleTouchMove = event => {
            const currentTouches = getCurrentTouches(event, event.changedTouches)
            setTouches(currentTouches);

            if (Math.abs(currentTouches.deltaX > minDelta) && currentTouches.x > touches.x) {
                setGesture('onSwipeLeft')
            }
            else if (Math.abs(currentTouches.deltaX < minDelta) && currentTouches.x < touches.x) {
                setGesture('onSwipeRight');
            }
            else {
                setGesture('');
            }
        };
    
        const handleTouchEnd = event => {
            if (gesture) callHandler(gesture, event);
        };

        const callHandler = (eventName, event) => {
            if (eventName && handlers[eventName] && typeof handlers[eventName] === 'function') {
              handlers[eventName](event);
            }
        };

        
        const getCurrentTouches = (originalEvent, touches) => {
            
            const firstTouch = initialTouches.current;
            const pointer = {
                x: touches[0].clientX,
                y: touches[0].clientY
            };

            return {
                preventDefault: originalEvent.preventDefault,
                ...pointer,
                deltaX: firstTouch ? pointer.x - firstTouch.x : 0
            };
        };
    
        if (element !== null) {
         
            element.addEventListener('touchstart', handleTouchStart);
            element.addEventListener('touchmove', handleTouchMove);
            element.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (element !== null) {
                element.removeEventListener('touchstart', handleTouchStart);
                element.removeEventListener('touchmove', handleTouchMove);
                element.removeEventListener('touchend', handleTouchEnd);
            }
        };
    });
};


export default useSwipe;

