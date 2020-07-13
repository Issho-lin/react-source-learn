 function render(vnode, container) {
     if (Array.isArray(vnode) && vnode.length > 0) {
         vnode.forEach(v => render(v, container))
         return
     }
     const node = createNode(vnode)
     container.appendChild(node)
 }

 function createNode(vnode) {    
    const { type, props } = vnode
    let node
    if (type === 'text') {
        node = document.createTextNode('')
    } else if (typeof type === 'string') {
        node = document.createElement(type)
    } else if (typeof type === 'function') {
        node = type.isReactComponent ? createClassComp(vnode) : createFunctionComp(vnode)
    } else {
        node = document.createDocumentFragment()
    }
    setNodeProps(node, props)
    recursion(props.children, node)
    return node
}

function setNodeProps(node, props) {
    Object.keys(props).filter(key => key !== 'children').forEach(key => {
        if (key.startsWith('on')) {
            let eventName = key.substr(2).toLowerCase()
            node.addEventListener(eventName, props[key])
        } else {
            node[key] = props[key]
        }
        console.log(key)
    })
}

function recursion(children,  node) {
    children.forEach(child => {
        render(child, node)
    })
}

function createFunctionComp(vnode) {
    const { type, props } = vnode
    const vvnode = type(props)
    const node = createNode(vvnode)
    return node
}

function createClassComp(vnode) {
    const { type, props } = vnode
    const comp = new type(props)
    const vvnode = comp.render()
    const node = createNode(vvnode)
    return node
}

 export default { render }