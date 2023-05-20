import React, { Component } from 'react'

export class AllMenu extends Component {


    constructor(){
        super();
        this.MegaMenu= this.MegaMenu.bind(this);
    
      }
      componentDidMount(){
        this.MegaMenu();
    
      }
    
      MegaMenu(){
        var acc =document.getElementsByClassName("accordionAll");
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
        <div className='accordionmenuDivAll'>
        <div className='accordionmenuDivInsideAll'>

          <button className='accordionAll'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconAll'/>&nbsp;
           Something 1
          </button>

          <div className='panelAll'>
            <ul>
              <li><a href="#" className='accordionItemAll'>Something items</a></li>
              <li><a href="#" className='accordionItemAll'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordionAll'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconAll'/>&nbsp;
           Something 2
          </button>

          <div className='panelAll'>
            <ul>
              <li><a href="#" className='accordionItemAll'>Something items</a></li>
              <li><a href="#" className='accordionItemAll'>Something items 2</a></li>
            </ul>
          </div>


          <button className='accordionAll'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconAll'/>&nbsp;
           Something 3
          </button>

          <div className='panelAll'>
            <ul>
              <li><a href="#" className='accordionItemAll'>Something items</a></li>
              <li><a href="#" className='accordionItemAll'>Something items 2</a></li>
            </ul>
          </div>


          <button className='accordionAll'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconAll'/>&nbsp;
           Something 4
          </button>

          <div className='panelAll'>
            <ul>
              <li><a href="#" className='accordionItemAll'>Something items</a></li>
              <li><a href="#" className='accordionItemAll'>Something items 2</a></li>
            </ul>
          </div>


          <button className='accordionAll'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconAll'/>&nbsp;
           Something 5
          </button>

          <div className='panelAll'>
            <ul>
              <li><a href="#" className='accordionItemAll'>Something items</a></li>
              <li><a href="#" className='accordionItemAll'>Something items 2</a></li>
            </ul>
          </div>


          <button className='accordionAll'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIconAll'/>&nbsp;
           Something 6
          </button>

          <div className='panelAll'>
            <ul>
              <li><a href="#" className='accordionItemAll'>Something items</a></li>
              <li><a href="#" className='accordionItemAll'>Something items 2</a></li>
            </ul>
          </div>

  
          </div>

      </div>
    )
  }
}

export default AllMenu