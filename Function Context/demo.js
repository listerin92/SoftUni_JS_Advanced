function solve(){
    let person = {
        name: 'Pesho',
        speak: function(message) {
            console.log(`${this.name}: ${message}`); 
            return this;
        }
    }
    let context = person.speak('Hello world');
    let globalSpeak = person.speak;

    globalSpeak('Hello from global');

}
solve(0);
