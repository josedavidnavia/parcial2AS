
export enum AttributeChar {
    "tex" = "tex",
    "img" = "img",
}

class AppContainer extends HTMLElement {
    name?: string;
    img?: string;

    
    static get observedAttributes (){
        const attrs: Record <AttributeChar, null> = {
            tex: null,
            img: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:AttributeChar,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this.[propName] = newValue;
            break;
        }
        
        this.render();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div class="card">
            <p>${this.name}</p>
            <img src="${this.img}">
            </div>
            `
            
        }
    }
}

customElements.define("my-char", AppContainer);
export default AppContainer;












