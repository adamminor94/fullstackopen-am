const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }




const Part = (props) => {
  return(
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Header = (props) => {
  return(
  <h1>{props.course.name}</h1>
  )
 }
const Content = (props) => {
  return(
    <div>
      <Part part={course.parts[0]}/>
      <Part part={course.parts[1]}/>
      <Part part={course.parts[2]}/>
  </div>
  )
}
const Total = (props) => {
  return(
  <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </p>
  )
}

  return (
    <div>
    <Header course={course.name}/>
    <Content parts={course}/>
    <Total course={course}/> 
    </div>
  )

}

export default App