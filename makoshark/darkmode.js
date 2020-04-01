/*
       _            _               _       
      /\ \         /\ \            /\ \     
      \_\ \       /  \ \          /  \ \    
      /\__ \     / /\ \ \        / /\ \ \   
     / /_ \ \   / / /\ \_\      / / /\ \_\  
    / / /\ \ \ / / /_/ / /     / / /_/ / /  
   / / /  \/_// / /__\/ /     / / /__\/ /   
  / / /      / / /_____/     / / /_____/    
 / / /_     / / /\ \ \  _   / / /\ \ \  _   
/_/ //\_\  / / /  \ \ \/\_\/ / /  \ \ \/\_\ 
\_\/ \/_/  \/_/    \_\/\/_/\/_/    \_\/\/_/ 
*/

const appVersion = navigator.appVersion,
      evilGoogle = /Android|iPhone/g;

if (appVersion.match(evilGoogle)) {
    document.getElementsByClassName("logo")[0].remove();
    document.getElementsByTagName("header")[0].style.position = "inherit";
}

// * TODO Dark Mode
