function add(a, b) {
  return a + b;
}

const twoPlusFour = add(2, 4);



const ES5Functions = () => {
  return (
    <>
      <h2>Functions</h2>
      <h3>Legacy ES5 functions</h3>
      twoPlusFour = {twoPlusFour}
      <br />
      add(2, 4) = {add(2, 4)}
      <br />
    </>
  );
}



export default ES5Functions