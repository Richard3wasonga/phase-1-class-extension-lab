// Your code here
class Polygon{
    constructor(array){
        this.array = array;
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        let total = 0
        for(let i = 0; i< this.array.length;i ++){
            total += this.array[i]
        }
        return total
    }
}
class Triangle extends Polygon{
    get isValid(){
       const[a,b,c] = this.array
       return a + b > c && a + c > b && b + c > a
    }
}
class Square extends Polygon {
    get isValid(){
        return this.countSides === 4 && this.array.every(side => side === this.array[0])
    }
    get area(){
        return this.array[0] * this.array[0]
    }
}