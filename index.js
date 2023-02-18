var numbers1 = [12, 13, 14, 15, 17, 18, 20, 22]
var numbers2 = [112, 113, 114, 14, 18, 202, 105, 105]

var sameNumber = []
for (var i = 0; i < numbers1.length; i++){
    for (var j = 0; j < numbers2.length; j++)
    // console.log('check->',numbers1[i],numbers2[j])
    if (numbers1[i]==numbers2[j]){
        sameNumber.push(numbers1[i])
        
    }
}
console.log('same number->', sameNumber)


var area = ['liyari','nagan','north karachi']

var userArea = prompt ('in which area')
for ( var i=0; i<area.length;i++){
    console.log(area[1])
    if (userArea.toLowerCase()==area[i]){
        alert('area found')
        break
    }
}