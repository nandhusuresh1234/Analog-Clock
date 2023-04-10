setInterval(()=>{
    a=new Date();
    htime=a.getHours();
    mtime=a.getMinutes();
    stime=a.getSeconds();

    hRotation=30*htime+mtime/2;
    mRotation=6*mtime
    sRotation=6*stime

    hour.style.transform =`rotate(${hRotation}deg)`;
    minute.style.transform =`rotate(${mRotation}deg)`;
    second.style.transform =`rotate(${sRotation}deg)`;
},1000);