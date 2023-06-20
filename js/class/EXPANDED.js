class EXPANDED{
    constructor(btnDom){
        this.btnDom=btnDom,
        this.isExpand=false

    }
    btnIconChange(){
        this.isExpand=!this.isExpand
        if (this.isExpand) {
            this.btnDom.innerHTML="展開"
        }else{
            this.btnDom.innerHTML="縮小"
        }
        
    }

}