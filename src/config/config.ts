interface Config {
  jwtSecret: string;
}

const getConfig = (): Config => ({
  jwtSecret: process.env.JWT_SECRET,
});

const getConfigKeys = (): Config => ({
  jwtSecret: "jwtSecret",
});

const config = getConfigKeys();

export { getConfig, config } ;