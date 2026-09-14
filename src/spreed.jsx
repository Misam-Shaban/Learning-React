const spreadOne = [1,2,3,4,5];
const spreadTwo = [6,7,8,9,10];

const collectData = [...spreadOne, ...spreadTwo ];



function Spreed() {
  return (
    <>
      <div>
        {collectData.join(",")}
      </div>
    </>
  )
}

export default Spreed;
