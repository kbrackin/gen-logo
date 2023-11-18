
class Shape {
    constructor(svgText, svgTextColor, svgShapeColor) {
        this.svgText = svgText;
        this.svgTextColor = svgTextColor;
        this.svgShapeColor = svgShapeColor
    }

    textStyle() {
        return `<text x="100" y ="75" font-size="48" text-anchor="middle" fill="${this.svgTextColor}">${this.svgText}</text>`
    }
}


class Circle extends Shape {
    render() {

    }
}

class Triangle extends Shape {

}

class Square extends Shape {
    
}

function createLogo() {
    let newLogoData;


}