class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display() {
        var title = createElemet('h2');
        title.html("Car Game");
        title.position(130,0);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
        })
    }
}