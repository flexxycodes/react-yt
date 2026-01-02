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
          <Card name={elem.Name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} Logo={elem.Logo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App