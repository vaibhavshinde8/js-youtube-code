const user={
    username:"hitesh",
    price:99,

    welcomeMassage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this); ///this keyword refers to current context..like what is current object properties functions
                            // in that block where we access this keyword
                            
    }
}
user.welcomeMassage();
user.username="sam";
user.welcomeMassage();
console.log(this); /////******** here this is empty object */
