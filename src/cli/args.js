const parseArgs = () => {
  const args = Object.values(process.argv).slice(2);
  const strArgs = args
    .map((arg, index) => index % 2 === 0 ? `${arg} is ${args[index + 1]}`: null)
    .filter(Boolean)
    .join(', ')
  console.log(strArgs)
};

parseArgs();
