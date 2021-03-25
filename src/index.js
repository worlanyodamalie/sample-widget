import { showLayout , modalToggle } from './components/layout'

const scriptId = document.currentScript.attributes.id.value;


function app (window) {
    // alert("Sample widget")
    let configurations = {
        default: true
    }


    let globalObject = window[scriptId];
    let queue = globalObject.q

    if (queue){
        for ( var i = 0; i < queue.length; i++ ){
            if( queue[i][0].toLowerCase() === 'init'){
                configurations = extendObject(configurations, queue[i][1]);
                showLayout()
            }

        }
    }

    globalObject.configurations = configurations;
    console.log(globalObject)
    return globalObject;
}

function extendObject(a, b) {
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

function windowOnClick(event){
    if (event.target === "widget-modal"){
        modalToggle
    }
}

let initObject =  app(window);

const widgetBtnID = initObject.configurations.id
const widgetBtn = document.getElementById(widgetBtnID)
const w_closeBtn = document.getElementById('w_close_btn')

widgetBtn.addEventListener('click' , modalToggle )
w_closeBtn.addEventListener('click' , modalToggle)
