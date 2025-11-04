export function Employee (props){
    console.log(props)
    return <div>
        <p>employee</p>
        <p>{props.empData.name}</p>
        <p>{props.empData.email}</p>
        {props.children}
    </div>
}