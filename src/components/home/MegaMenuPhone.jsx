import React, { Component,  } from 'react'

export class MegaMenuPhone extends Component {

    constructor(){
        super();
        this.MegaMenu= this.MegaMenu.bind(this);
    
      }
      componentDidMount(){
        this.MegaMenu();
    
      }
    
      MegaMenu(){
        var acc =document.getElementsByClassName("accordionMobile");
        var accNum = acc.length;
        var i;
        for(i=0; i<accNum; i++){
          acc[i].addEventListener("click",function(){
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if(panel.style.maxHeight){
              panel.style.maxHeight = null;
            }else {
              panel.style.maxHeight = panel.scrollHeight+ "px"
    
            }
    
          })
        }
     }
  render() {
    return (
        <div className='accordionmenuDivMobile'>
        <div className='accordionmenuDivInsideMobile'>

          <button className='accordionMobile'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconMobile'/>&nbsp;
           Something 1
          </button>

          <div className='panelMobile'>
            <ul>
              <li><a href="#" className='accordionItemMobile'>Something items</a></li>
              <li><a href="#" className='accordionItemMobile'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordionMobile'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconMobile'/>&nbsp;
           Something 2
          </button>

          <div className='panelMobile'>
            <ul>
              <li><a href="#" className='accordionItemMobile'>Something items</a></li>
              <li><a href="#" className='accordionItemMobile'>Something items 2</a></li>
            </ul>

          </div>


          <button className='accordionMobile'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconMobile'/>&nbsp;
           Something 3
          </button>

          <div className='panelMobile'>
            <ul>
              <li><a href="#" className='accordionItemMobile'>Something items</a></li>
              <li><a href="#" className='accordionItemMobile'>Something items 2</a></li>
            </ul>
          </div>



          <button className='accordionMobile'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconMobile'/>&nbsp;
           Something 4
          </button>

          <div className='panelMobile'>
            <ul>
              <li><a href="#" className='accordionItemMobile'>Something items</a></li>
              <li><a href="#" className='accordionItemMobile'>Something items 2</a></li>
            </ul>
          </div>


          <button className='accordionMobile'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconMobile'/>&nbsp;
           Something 5
          </button>

          <div className='panelMobile'>
            <ul>
              <li><a href="#" className='accordionItemMobile'>Something items</a></li>
              <li><a href="#" className='accordionItemMobile'>Something items 2</a></li>
            </ul>
          </div>


          <button className='accordionMobile'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconMobile'/>&nbsp;
           Something 6
          </button>

          <div className='panelMobile'>
            <ul>
              <li><a href="#" className='accordionItemMobile'>Something items</a></li>
              <li><a href="#" className='accordionItemMobile'>Something items 2</a></li>
            </ul>
          </div>

          </div>
      </div>

      

      
  )
}

}

export default MegaMenuPhone