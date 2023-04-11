const totalObtainMarks=(data)=>{
    let totalObtain=0;
    for(let i=0; i<data.length; i++){
        totalObtain=total+data[i].obtaind_mark;
    }
    return totalObtain;
}

export {
    totalObtainMarks,
}