gapi.load('client', () => loadClient(true));
setFooter('2025')
setTabs(['home', null, 'ballpit'])
initializeHash('home')
// setSidebar(generateSidebar())
//     .then(() => {
//         changeGame(2, true)
//     })
// function generateSidebar() {
//     let HTMLContent = ''
//     games.forEach(game => {
//         HTMLContent += `<div class="container grow banner" style='width:100%' onclick="changeGame(${1})"><img src="images/logo/${game}.png"></div>`
//     })
//     return HTMLContent
// }
// function changeGame(game, stop) {
//     range = game.toUpperCase() + '!A:Z'
//     globalGame = game
//     globalArea = 'all'
//     document.getElementById('sidebarLogo').src = `images/logo/${globalGame}.png`
//     if (!stop) fetchData()
// }
function processData(data) {
    const allData = convertToObjects(data)
    allData.forEach(star => {
        const course = courses.find(course => course.id == star.course)
        if (course) {
            course.stars.push(star)
        } else {
            other.push(star)
        }
    })
    showTab(globalTab)
}
function action() {
    switch (globalTab) {
        case 'home':
            generateHome()
            break
        case 'ballpit':
            generateBallpit()
            break
    }
}