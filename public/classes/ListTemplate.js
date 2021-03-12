/************** Rendering an HTML Template***********************/
export class ListTemplate {
    // First it will take the ui container in which the list should be displayed
    constructor(container) {
        this.container = container;
    }
    // This method will render the list according to the payments and invoices given as parameter
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerHTML = item.format();
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
