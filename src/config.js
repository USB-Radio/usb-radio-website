import { config } from "dotenv";

config();

export const port = process.env.PORT || 3000;

export const host = process.env.ACR_HOST;
export const endpoint = process.env.ACR_ENDPOINT;
export const signature_version = process.env.ACR_SIGNATURE_VERSION;
export const data_type = process.env.ACR_DATA_TYPE;
export const access_key = process.env.ACR_ACCESS_KEY;
export const access_secret = process.env.ACR_ACCESS_SECRET;

// export const streamUrl = process.env.STREAM_URL;
export const AzuraUrl = process.env.AZURA_API_URL;
export const streamHostUrl = process.env.STREAM_URL;
// export const googleCredentialsPath = process.env.GOOGLE_CREDENTIALS_PATH;
