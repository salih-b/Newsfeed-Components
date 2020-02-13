/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function ArticleCard(theArray) {
  // Assignments 
  const Menu = document.createElement('div'),
        ul = document.createElement('ul'),
        menuItems = document.createElement('li'),
        menuButton = document.querySelector('.header img');
        // menuItem1 = document.createElement('li'), 
        // menuItem2 = document.createElement('li'),
        // menuItem3 = document.createElement('li'),
        // menuItem4 = document.createElement('li'),
        // menuItem5 = document.createElement('li'),
        // menuItem6 = document.querySelectorAll('li');


  // Text Content
theArray.forEach(function(item){
    menuItems.textContent = item;
});
  //  menuItem1.textContent = array[0];
  //  menuItem2.textContent = array[1];
  //  menuItem3.textContent = array[2];
  //  menuItem4.textContent = array[3];
  //  menuItem5.textContent = array[4];
  //  menuItem6.textContent = array[5];


   
   // class assignment
   Menu.classList.add('menu');

   //event Listeners
   menuButton.addEventListener('click', () => {
    Menu.classList.toggle('menu--open');
  });

   // format
   Menu.append(ul);
   ul.append(menuItems);
   
   return Menu;
 } // Article Card Function Ends Here

 let theHeader = document.querySelector('.header');
 theHeader.append(ArticleCard(menuItems));