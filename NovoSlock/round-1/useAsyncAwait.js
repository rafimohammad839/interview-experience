// Question: Change the function so that it prints values
// in sequence Hint : Use async await
/*function print(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      console.log(i);
    }, Math.random() * 10)
  }
}

print(10); */

// Solution 
const waitForRandomTime = item =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(item),
      Math.floor(Math.random() * 10)
    )
  );

const printInSequence = async (n) => {
  for (let i = 0; i < n; i++) {
    const uppercaseItem = await waitForRandomTime(i);
    console.log(uppercaseItem);
  }
};

printInSequence(10);