import '../assets/widget.css'

const scriptId = document.currentScript.attributes.id.value;

const widgetBtn = document.getElementById(scriptId)
const widgetModal = document.getElementsByClassName('widget-modal')

const closeSvg = `<svg version="1.1" class="w_close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
<g>
<g>
   <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
       L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
       c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
       l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
       L284.286,256.002z"/>
</g>
</svg>`;

export function widgetLayout(){
  return  `<div class="widget-modal">
        <div class="widget-modal-content">
            <div class="flex justify-end">
                <a id="w_close_btn"> ${closeSvg} </a>
            </div>
        </div>
    </div> `;
}

export function modalToggle(){
    widgetModal[0].classList.toggle("widget-show-modal")
}

export function showLayout(){
   
    let createDiv = document.createElement('div');
    createDiv.innerHTML = widgetLayout() ;
    document.body.appendChild(createDiv)
    console.log(widgetModal[0])
    // widgetBtn.addEventListener("click" , modalToggle )
}