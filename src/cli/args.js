const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = args.reduce((acc, arg, currentIndex) => {
    const value = args[currentIndex + 1];
    if (arg.startsWith("--") && value) {
      acc.push(`${arg.slice(2)} is ${value}`);
    }
    return acc;
  }, []);
  console.log(parsedArgs.join(", "));
};

parseArgs();
