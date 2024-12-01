// Check if the viewport width indicates desktop view
function handleResponsiveNav() {
    const navBar = document.body.getElementsByTagName("nav")[0];
    const menuButton = document.getElementById("menu-button");
    const tabsId = "tabs";
  
    // Remove existing tabs if resizing back to mobile
    const existingTabs = document.getElementById(tabsId);
    if (existingTabs) {
      existingTabs.remove();
    }
  
    if (window.innerWidth > 768) { // Adjust width for your desktop breakpoint
      // Remove the menu button
      if (menuButton) menuButton.style.display = "none";
  
      // Create a div for navigation links
      const tabs = document.createElement("div");
      tabs.id = tabsId;
  
      // Add links to the div
      const links = ["Portfolio", "About", "Contact"];
      links.forEach(linkText => {
        const link = document.createElement("a");
        link.textContent = linkText;
  
        // Assign hrefs for links
        if (linkText === "Portfolio") {
          link.href = "index.html";
        } else {
          link.href = `#${linkText.toLowerCase()}`;
        }
  
        tabs.appendChild(link);
      });
  
      // Append the new tabs to the nav bar
      navBar.appendChild(tabs);
    } else {
      // Show menu button in mobile view
      if (menuButton) menuButton.style.display = "block";
    }
  }
  
  // Run the function on page load and on resize
  window.addEventListener("load", handleResponsiveNav);
  window.addEventListener("resize", handleResponsiveNav);
  
