const cryptoNode = require("crypto");
const fs = require("fs");
const zlib = require("zlib");

const encryptedFilePath = "secret.enc";
const decryptedFilePath = "uncrypted-secret.zip";
const ivFilePath = "iv.txt";
const authFilePath = "auth.txt";

function decryptFile(
  encryptedFilePath,
  decryptedFilePath,
  ivFilePath,
  authFilePath
) {
  const keyString = fs.readFileSync("secret.key", "utf8");
  const key = Buffer.from(keyString, "hex");
  const iv = fs.readFileSync(ivFilePath);
  const authTag = fs.readFileSync(authFilePath);
  const algorithm = "aes-256-gcm";

  const decipher = cryptoNode.createDecipheriv(algorithm, key, iv);
  const encryptedData = fs.readFileSync(encryptedFilePath);
  decipher.setAuthTag(authTag);

  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  decryptedData = decipher.final("utf-8");

  fs.writeFileSync(decryptedFilePath, decryptedData);
}

decryptFile(encryptedFilePath, decryptedFilePath, ivFilePath, authFilePath);

const zipFilePath = "clear_smaller.txt.zip";
const writeFilePath = "unzipped_clear_smaller.txt";

function unzipFile(zipFilePath, writeFilePath) {
  const fileContents = fs.createReadStream(zipFilePath);
  const writeStream = fs.createWriteStream(writeFilePath);
  const unzipFile = zlib.createGunzip();

  fileContents.pipe(unzipFile).pipe(writeStream);
}

// unzipFile(zipFilePath, writeFilePath);
