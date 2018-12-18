let contactSubmit = () =>{
    let information ={
        " Name": document.getElementById('name').value,
        " Email": document.getElementById('email').value,
        " Phone": document.getElementById('phone').value,
        " Inquiry": document.getElementById('inquiry').value,
        " Additional information": document.getElementById('additionalInfo').value,
        " Visited": document.getElementsByName('visit'),
        " Day(s) to contact": document.getElementsByName('days'),
    }


    let visited
    information[" Visited"].forEach((option)=>{
        if(option.checked){
            visited= option.value
        }
    })
    let daysContact = []
    information[" Day(s) to contact"].forEach((day)=>{
        if(day.checked){
            daysContact.push(day.value)
        }
    })

    let missingInfo=[]
    
    for(let info in information){
        if(info === ' Day(s) to contact'){
            if(daysContact.length > 0){
                continue
            }
            missingInfo.push(info)
        }else if(info === ' Visited'){
            if(visited){
                continue
            }else{
                missingInfo.push(info)
            }
        }else if(information[info]){
            continue            
        }else{
            missingInfo.push(info)
        }
    }

    if(missingInfo.length===0){
        alert('Thank you! We will get backto you soon.')
    }else{
        alert(`Missing: ${missingInfo}`)
    }

    return false
}