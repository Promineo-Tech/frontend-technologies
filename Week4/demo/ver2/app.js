/**
  1. Grab the element with id equal to 'company-name'
  2. Change the text from 'Company Name' to 'Generali.st'
 */
  function setTextForCompanyName() {
    let companyName = document.querySelector("#company-name");
    companyName.innerText = "Generali.st";
  }
  setTextForCompanyName()
  
  /** 
    1. Grab the element with id equal to 'company-name'
    2. From the element's 'style' attribute, set the 'fontFamily' to 'Vibur'
   */
  function setFontForCompanyName() {
     let companyName = document.querySelector("#company-name");
     companyName.style.fontFamily = "Vibur";
  }
  setFontForCompanyName()
  
  /**
    1. Grab all anchor links in the header
    2. For each of them, from their 'style' attribute, set their 'border' to '1px solid white'
   */
  function setBorderOnHeaderNavLinks() {
   // convert nodeList to an array (...spread operator) 
   let anchors = [...document.querySelectorAll("header a")];
   anchors.forEach(anchor => {
     anchor.style.border = "1px solid white";
   });
  }
  setBorderOnHeaderNavLinks()
  
  /**
    1. Grab all image tags in main
    2. For each of them, set the 'src' attribute to 'http://placeimg.com/64/64/any'
    3. For each of them, from their 'style' attribute, set the 'float' to 'left',
         set 'marginRight' to '12px', and set 'borderRadius' to '50%'
   */
  function setSrcForImageTags() {
    // convert nodeList to an array (...spread operator) 
    let images = [...document.querySelectorAll("main img")];
    images.forEach(img => {
       img.src = "http://placeimg.com/64/64/any";
       img.style.float = "left";
       img.style.marginRight = "12px";
       img.style.borderRadius = "50px";
     });
  }
  setSrcForImageTags()
  
  /**
    1. Grab all paragraph tags in main
    2. For each of them, from their 'style' attribute, set their 'fontFamily' to
      'Raleway'
   */
  function setFontFamilyForParagraphs() {
     let para = [...document.querySelectorAll("main p")];
       para.forEach(p => {
          p.style.fontFamily = "Raileway";
     });
  }
  setFontFamilyForParagraphs()
  
  /**
    1. Grab the first paragraph in each section
    2. For each of them, from their 'style' attribute, set their 'fontSize' to '1.4em'
      and their 'color' to '#0f0'
    
    (see: https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)
   */
  function firstParagraphsAreSpecial() {
      let para = [...document.querySelectorAll("section p:first-of-type")];
       para.forEach(p=> {
         p.style.fontSize = "1.4em";
         p.style.color = "#0f0";
     });
  }
  firstParagraphsAreSpecial()
  
  /**
    1. Grab the anchor tags in the aside tag
    2. If they have a 'data-title' property, use the value to change the tags inner text
    3. If they don't, remove the parent of the anchor tag instead
  
    (see: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
        : https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
   */
  
   function updateLinkTextsInAside() {
        let anchors = [...document.querySelectorAll("aside a")];
        anchors.forEach(a => {
          let title = a.getAttribute("data-title");
          if (title) {
                 a.innerText = title;
          } else {
            a.parentNode.remove();
          }
        })
   }
   updateLinkTextsInAside()
  
   /**
    1. Grab the header
    2. Accessing the 'classList' property:
      - remove the class 'regal'
      - add the class 'elegant'
  
    (see: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    */
  function updateHeader() {
    let header = document.querySelector('header')
    header.classList.remove('regal')
    header.classList.add('elegant')
  }
  updateHeader()
  
  /**
    1. Grab all nav tags with a class of 'vert'
    2. Accessing the 'classList' property, toggle the class 'grey'
   */
  function swapGreyVerticals() {
     let nav = [...document.querySelectorAll('nav.vert')];
     nav.forEach(el => {
      el.classList.toggle('grey')
     })
  }
  
  swapGreyVerticals()
  
   /**
    1. Grab the footer
    2. Change the 'background' attribute of its 'style' property to '#222'
    3. Using the footer element, grab the anchor tags
    4. Change the 'color' attribute of their 'style' property to '#ff8'
    5. To the 'classList' property, use the 'add' method to add the class 'no-underline'
    */
  function updateFooter() {
  
    let footer = document.querySelector('footer')
    footer.style.background = "#222";
  
    let anchors = [...footer.querySelectorAll('a')];
    anchors.forEach(a => {
      a.style.color = "#ff8"
      a.style.textDecoration = "none"
      a.classList.add('no-underline')
    })
  }
  
  updateFooter()