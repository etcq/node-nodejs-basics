const parseEnv = () => {
  const envVariables = Object.entries(process.env)
  const rssVariables = envVariables
    .filter(([key, _]) => key.includes('RSS_'))
    .map(([key, value]) => `${key}=${value}`);
  const strRssVariables = rssVariables.join('; ')
  console.log(strRssVariables);
};

parseEnv();
