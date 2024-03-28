function customRender(reactElement,Container){



// const domElement = document.createElement(reactElement.type) //creating dom element to inject using append child 
// domElement.innerHTML = reactElement.children
// domElement.setAttribute('href',reactElement.props.href)
// domElement.setAttribute('target',reactElement.props.target)


// Container.appendChild(domElement)

const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in reactElement.props){
    if( prop === 'children' ) 
    continue;  //first we used to do this but since props does not have children as value here so no issue 
    
    domElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElement)


}


const reactElement = {
    type: 'a',//dev ,paragrapgh or like this a tag 
    props:{        //it is an object and we can add as many properties as much we want 
        href:"https://google.com",
        target:'_blank',
    },
    children:'click me to visit google '

}


const mainContainer = document.querySelector('#root')

//we will render this object using this method or element 
//by adding  this element  in the DOM tree (injecting the element in the root and div)
customRender(reactElement,mainContainer)