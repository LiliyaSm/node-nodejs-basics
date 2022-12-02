const parseEnv = () => {
  const rssEnvVariables = Object.entries(process.env).reduce((acc, env) => {
    if (env[0].startsWith("RSS_")) acc.push(`${env[0]}=${env[1]}`);
    return acc;
  }, []);
  console.log(rssEnvVariables.join("; "));
};

parseEnv();
