import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      Logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      Name: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    }
  ];


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card />
        </div>
      })}
    </div>
  )
}

export default App