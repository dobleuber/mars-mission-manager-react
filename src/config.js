// config.js
export default typeof window !== 'undefined' && window.env
  ? {
    RAZZLE_MAPS_API_KEY: window.env.RAZZLE_MAPS_API_KEY,
  }
  : {
    RAZZLE_MAPS_API_KEY: process.env.RAZZLE_MAPS_API_KEY,
  }