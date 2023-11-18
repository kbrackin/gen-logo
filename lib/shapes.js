
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
        return `<circle cx="150" cy="100" r="80" fill="${this.svgShapeColor}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.svgShapeColor}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.svgShapeColor}" />`
    }
}

function createLogo() {
    let newLogoData;

    if (data.svgLogoShape == 'Circle') {
        newLogoData = new Circle(data.svgText, data.svgTextColor, data.svgShapeColor)
    }
    else if (data.svgLogoShape == 'Triangle') {
        newLogoData = new Triangle(data.svgText, data.svgTextColor, data.svgShapeColor)
    }
    else if (data.svgLogoShape == 'Square') {
        newLogoData = new Square(data.svgText, data.svgTextColor, data.svgShapeColor)
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${newLogoData.render()}
    ${newLogoData.textStyle()}
    </svg>`
    
}

module.exports = { createLogo, Circle, Triangle, Square }