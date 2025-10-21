const ProductCard = ()=>{
    const data = [1,"hi", "hello",3,4]
    const students = [{name:"sharath", class:2}, {name:"tom", class:10}]
    return <div>
       {data.map((value, index)=><p key={index}>{value}</p>)}
       {students.map((value, index)=> <div>
        <p> student name{value.name}</p>
        <p>class {value.class}</p>
       </div>)}
    </div>
}

export default ProductCard