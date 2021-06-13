const circleArea = r => {
    let result = Math.PI * (Math.sqrt(r))
    return console.log(result.toFixed(2))
}

const circleCircumference = r => {
    let result = (2 * Math.PI * r)
    return console.log(result.toFixed(2))
}

module.exports={
    circleArea,
        circleCircumference
}
