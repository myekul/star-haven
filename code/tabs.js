function generateHome() {
    let HTMLContent = `<div class='container'><table>`
    courses.forEach(course => {
        course.stars.forEach((star, index) => {
            HTMLContent += `<tr class='${getRowColor(index)}'>`
            if (index == 0) {
                HTMLContent += `
                <td rowspan=7 class='${course.id}' style='width:150px;text-align:center'>
                ${getImage(course)}
                <div>${course.name}</div>
                </td>`
            }
            HTMLContent += `<td>${star.name}</td>`
            if (star.extra) {
                let src = 'red'
                if (star.extra == 'C') src = 'coin'
                if (star.extra == '5') src = '5'
                HTMLContent += `<td><img src='images/${src}.png' class='container' style='height:21px'></td>`
            }
            HTMLContent += `</tr>`
        })
    })
    HTMLContent += `</table></div>`
    document.getElementById('content').innerHTML = HTMLContent
}
function getImage(course, size = 64) {
    return `<img src='https://myekul.com/shared-assets/sm64/images/${course.id}.png' style='height:${size}px'>`
}
function generateBallpit() {
    document.getElementById('content').innerHTML = `<div id='ballpit'></div>`
    let HTMLContent = ''
    courses.forEach(course => {
        HTMLContent += `<div class='square'>${getImage(course, 100)}</div>`
    })
    setBallpit(HTMLContent)
}