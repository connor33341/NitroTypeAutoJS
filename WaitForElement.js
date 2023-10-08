// Function to wait for an element by class name
function ClassNameWait(className) {
    // Select the target element by class name
    const targetElement = document.querySelector(`.${className}`);
    
    // If the element already exists, call the callback immediately
    if (targetElement) {
      console.log("Element already exists");
      return targetElement;
    }
    
    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        // Check if the target element has been added
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          const addedNode = Array.from(mutation.addedNodes).find(node => {
            return node.classList && node.classList.contains(className);
          });
          
          // If the target element is found, stop observing and call the callback
          if (addedNode) {
            observer.disconnect();
            console.log("Element added");
            return addedNode;
          }
        }
      });
    });
    
    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
 