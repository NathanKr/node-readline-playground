console.log('app is loading ...');
const readline = require('readline');

function promptUser(msg) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(msg, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}


async function run() {
  console.log('it is not working , not clear why !!!!!!!!!!!!!!!!');
  const ans = await promptUser(
    "do you want to continue : hit Enter to stop or any other key to continue"
  );
  console.log(ans ? "continue" : "stop");
}

run();
