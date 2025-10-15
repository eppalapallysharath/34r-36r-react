import './App.css'

function App() {
  const name = "sharath"
  const num = 123
  const t = true;
  const f = false;
  const n = null
  const u = undefined;
  const array = [1,"str",null]
  const obj = {name:"sharath", age:26}

  return <div>
    <h1 className="heading" >hi</h1> 
    <p>hello</p> 
    <ol>
    <li>my name {name} not me</li>
    <li>{num}</li>
    <li>{t}</li>
    <li>{f}</li>
    <li>{n}</li>
    <li>{u}</li>
    <li>{array}</li>
    {/* <li>{JSON.stringify(obj)}</li> */}
    <li>{obj.name}{obj.age} </li>
    </ol>
    {/* <li>{u}</li> */}
    </div>
  
}

export default App
