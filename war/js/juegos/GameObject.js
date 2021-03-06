function GameObject (object, x, y, width, height) {

    this.image = new Image ();
    this.image.src = object.url;
    this.id = object.id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.left = x;
    this.top = y;
    this.right = x+width;
    this.bottom = y+height;
    var clickFlag = false;
    var xoffset;
    var yoffset;
    this.draw = function(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };

    this.click = function(evento) {
        if (evento.clientX > this.x &&
                evento.clientX < (this.x + this.width) &&
                evento.clientY > this.y &&
                evento.clientY < (this.y + this.height)
                ) {

            clickFlag = true;
            xoffset = evento.clientX - this.x;
            yoffset = evento.clientY - this.y;
            return true;
        }
    };

    this.move = function(evento) {
        if (clickFlag == true) {
            this.x = evento.clientX-xoffset;
            this.y = evento.clientY-yoffset;
            this.left = this.x;
            this.top = this.y;
            this.right = this.x + this.width;
            this.bottom = this.y + this.height;
        }
    };
    
    this.collide = function (gameObject){

       
        return (
                (   (gameObject.left   > this.left)&&
                    (gameObject.left   < this.right)&&
                    (gameObject.top    > this.top)&&
                    (gameObject.top   < this.bottom)) ||

                (   (gameObject.right  > this.left)&&
                    (gameObject.right  < this.right)&&
                    (gameObject.top    > this.top)&&
                    (gameObject.top < this.bottom)) ||

                (   (gameObject.right   > this.left)&&
                    (gameObject.right  < this.right)&&
                    (gameObject.bottom > this.top)&&
                    (gameObject.bottom < this.bottom)) ||

                (   (gameObject.left   > this.left)&&
                    (gameObject.left  < this.right)&&
                    (gameObject.bottom    > this.top)&&
                    (gameObject.bottom    < this.bottom)) 

            );
    };

    this.unclick = function (event){
        clickFlag = false;
        return clickFlag;
    }

    this.isClicked = function (){
        return clickFlag ;
    }
    
}

