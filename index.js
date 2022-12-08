function onLoadActions() {
  
    for (let tile = 1; tile <= 76; tile++) {
      let tileNode = document.createElement("div");
  
      // 2) We customize it as needed
      tileNode.classList.add("tile");
      tileNode.innerText = tile;
      //tileNode.addEventListener("click", onTileClick); // Without ()
  
      // 3) Append it / add it somewhere in the DOM
      document.getElementsByClassName("main_board")[0].appendChild(tileNode);
  
      // For every day we create, we also want to have a list
      // where to store the appointments for that day.
      //appointments.push([
        // we add this EMPTY LIST to memory, so that we can store here appointments
      //]);
    }
  }

window.onload = onLoadActions;