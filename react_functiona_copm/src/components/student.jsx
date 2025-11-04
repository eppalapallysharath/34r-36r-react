export const Student = function(p){
    console.log(p)
    return <div>
        <p>students details</p>
        <p>{p.name}</p>
        <p>{p.classStandard}</p>
    </div>
}