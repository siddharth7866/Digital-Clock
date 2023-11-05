setInterval(sidtime,1000)

function sidtime() {
    const sidtime=new Date()
    let hour=sidtime.getHours()
    let seconds=sidtime.getSeconds()
    let minutes=sidtime.getMinutes()
    
    hour=hour<10?"0"+hour:hour
    seconds=seconds<10?"0"+seconds:seconds
    minutes=minutes<10?"0"+minutes:minutes
    if (hour>=12) {
        if(hour>12)
            hour=hour-12
        
    }else if(hour==12){
        hour=12

    }
    let times=hour+":"+minutes+":"+seconds
    document.getElementById("clock").innerHTML=times

    console.log(`"hour":${hour}`)
    console.log(`"seconds": ${seconds}`)
    console.log(`"minutes": ${minutes}`)
}

sidtime()