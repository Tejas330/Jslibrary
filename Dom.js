const cvx = document.querySelector("#cvx");
            const ctx = cvx.getContext("2d")
            cvx.height = innerHeight || 600
            cvx.width = innerWidth || 400
            class Quadrilateral{
            constructor(x,y,width,height,color){
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.color = color;
            }
            draw(){
                ctx.beginPath();
                ctx.rect(this.x,this.y,this.width,this.height );
                ctx.fillStyle = this.color;
                ctx.fill()
            }}
