let contactSubmit = () =>{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let inquiry = document.getElementById('inquiry')
    let additionalInfo = document.getElementById('additionalInfo').value
    let visit = document.getElementsByName('visit')
    let contact = document.getElementsByName('days')

    let visited
    visit.forEach((option)=>{
        if(option.checked){
            visited= option.value
        }
    })
let daysVisited = []
contact.forEach((day)=>{
        if(day.checked){
            daysVisited.push(day.value)
        }
    })
    console.log(inquiry)

    return false
}