import Component from './component'

function createElement(type, config, ...children) {
    if (config) {
        delete config.__self
        delete config.__source
    }
    let defineProps = { ...config }
    if (typeof type === 'function' && type.defaultProps) {
        const { defaultProps } = type
        defineProps = {
            ...defaultProps,
            ...defineProps
        }
    }
    const props = {
        ...defineProps,
        children: children.map(child => typeof child === 'object' ? child : createTextNode(child))
    }
    return {
        type,
        props
    }
}

function createTextNode(text) {
    return {
        type: 'text',
        props: {
            children: [],
            nodeValue: text
        }
    }
}

export { Component }

export default {
    Component,
    createElement
}