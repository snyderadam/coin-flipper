

const parentElement = document.querySelector ('body')


let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.round(Math.random()) //**** got this bit of code from 
                                                        // w3 schools ****
    },
    
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state === 0){
               return "Heads"
           }else{
               return "Tails"
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0){
            image.src = "https://lh3.googleusercontent.com/proxy/W1WiGwjvXYkW2pIMMhLfp90-0HFAUnaPqn7EcDgc5NPmd6jScl6jtRLi4ShEmBaOvqLmT8wyDZtNXpLzEX6eNzEDKgKtCJQlPQcwTapG224CwprX"
        }else{
            image.src = "https://3.bp.blogspot.com/-qK05f0E3nuk/UGa86aZhQTI/AAAAAAAACkk/wqrDDvcaYWM/s1600/scan0011.jpg"
        }
        
           return image;
    }
};
// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)

// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method
parentElement.append(coin)

function display20Flips(){
    for (let index = 0; index < 20; index += 1){
        coin.flip()
    let textElement = document.createElement('div')
        textElement.append(coin.toString())
        parentElement.append(textElement)
    }
}
function display20Images(){
    for (let index = 0; index < 20; index += 1){
    
        coin.flip()
        parentElement.append(coin.toHTML())
        

    }
}
display20Flips()
display20Images()
