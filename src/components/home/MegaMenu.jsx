import React, { Component } from 'react'

class MegaMenu extends Component {

  constructor(){
    super();
    this.MegaMenu= this.MegaMenu.bind(this);

  }
  componentDidMount(){
    this.MegaMenu();

  }

  MegaMenu(){
    var acc =document.getElementsByClassName("accordion");
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
      <div className='accordionmenuDiv'>
        <div className='accordionmenuDivInside'>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 1
          </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/7958/7958354.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 2
          </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 3
          </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 4
          </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 5
          </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 6
           </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 7
           </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>


          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 8
           </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 9
           </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          <button className='accordion'>
            <img src="https://cdn-icons-png.flaticon.com/256/6467/6467786.png" alt="" className='accordionMenuIcon'/>&nbsp;
           Something 10
           </button>

          <div className='panel'>
            <ul>
              <li><a href="#" className='accordionItem'>Something items</a></li>
              <li><a href="#" className='accordionItem'>Something items 2</a></li>
            </ul>
          </div>

          

        </div>
      </div>
    )
  }
}

export default MegaMenu