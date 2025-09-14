const sheetId = '1Kduwu8e7fsClnfH4kAVW9WKQ1K8w9lXuHQg5JN-hNgI'
range = 'A:Z'
const courses = [
    { id: 'bob', name: 'Bob-omb Battlefield', coins: 146 },
    { id: 'wf', name: "Whomp's Fortress", coins: 141 },
    { id: 'jrb', name: 'Jolly Roger Bay', coins: 104 },
    { id: 'ccm', name: 'Cool, Cool Mountain', coins: 154 },
    { id: 'bbh', name: "Big Boo's Haunt", coins: 151 },
    { id: 'hmc', name: 'Hazy Maze Cave', coins: 139 },
    { id: 'lll', name: 'Lethal Lava Land', coins: 133 },
    { id: 'ssl', name: 'Shifting Sand Land', coins: 136 },
    { id: 'ddd', name: 'Dire, Dire Docks', coins: 106 },
    { id: 'sl', name: "Snowman's Land", coins: 126 },
    { id: 'wdw', name: 'Wet-Dry World', coins: 152 },
    { id: 'ttm', name: 'Tall, Tall Mountain', coins: 137 },
    { id: 'thi', name: 'Tiny-Huge Island', coins: 191 },
    { id: 'ttc', name: 'Tick Tock Clock', coins: 128 },
    { id: 'rr', name: 'Rainbow Ride', coins: 146 }
]
courses.forEach(course => {
    course.stars = []
})
const other = []
const games = ['sm64', 'sms', 'smg']