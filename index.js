class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {

    get isValid (){
        let side1 = this.sideLengths[0]
        let side2 = this.sideLengths[1]
        let side3 = this.sideLengths[2]

        let sideCheck = (side1+ side2 > side3) && (side1+side3 > side2) && (side2+side3 > side1)

        if (sideCheck){
            return true
         } else {
             return false
         }
     }
}

class Square extends Polygon {
    get isValid() {
        return this.perimeter / 4 == this.sideLengths[0]
    }

    get area(){
        return this.sideLengths[1] * this.sideLengths[0]
    }
}