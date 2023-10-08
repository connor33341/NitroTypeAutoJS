function getAllEventListenersByType(element, eventType) {
    const eventListeners = [];
  
    function findEventListeners(node) {
      if (!node) return;
      const eventList = getEventListeners(node);
  
      if (eventList && eventList[eventType]) {
        eventListeners.push({
          element: node,
          listeners: eventList[eventType].map((listener) => {
            return {
              type: eventType,
              listener: listener.listener,
              useCapture: listener.useCapture,
            };
          }),
        });
      }
  
      for (const childNode of node.childNodes) {
        findEventListeners(childNode);
      }
    }
  
    findEventListeners(element);
  
    return eventListeners;
  }
  
  // Usage example:
  const eventTypeToFind = "click"; // Change this to the desired event type
  const elementsWithListeners = getAllEventListenersByType(document, eventTypeToFind);
  
  // Print the elements and their corresponding event listeners
  elementsWithListeners.forEach((item, index) => {
    console.log(`Element ${index + 1}:`, item.element);
    item.listeners.forEach((listener, listenerIndex) => {
      console.log(`  Listener ${listenerIndex + 1}:`);
      console.log(`    Type: ${listener.type}`);
      console.log(`    Function: ${listener.listener}`);
      console.log(`    Use Capture: ${listener.useCapture}`);
    });
  });
  