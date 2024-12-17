import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  "type": "service_account",
  "project_id": "tiktok-clone-6f799",
  "private_key_id": "d736b1ef089f13acb11d2abbc9ac68939a2afeed",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCjTJJE4A/XTelR\n2RmyoppqOUEOifLtvbjp/HbbIQpwE0OxQIueXOj14MrAnDHNCXOb1S/t28elRQ5G\n2V42cnwfVIgS3moyoKbcwxCWVEEy0/WP2mWuJrVfpkyp3+MoOUGX9V0aRRFGaCk0\nWuEZf/XxEU9ffXy8sre9XuPKnxDIprnegGyjyauERGxu+uvzeC2YyAr2UEm3geUQ\nHJ5Yqma3x+8OUWKQ48OHZ3GtRJcptz15VO5492gD0bOeI5zlk2u6rdYDr1eFadjJ\nw/dG//cTve5zXXMjZQM4tR5f2cxHdLapyJaXTo/5V4a3qWU+VHZVkjVnU+4JoFJP\nJftwJrVTAgMBAAECggEAE+JC/Tf7NdA61MiGpIXAH6cREOAjQGeVmIgxQMVpK/Rs\njay6U3Iku6u/hGyAc+LuvM7coy3bxXf/IQleu2p9SqNUXlfOvpNpPgBSiLuBpNrC\nT93b+7Si6R6qvxSP6FnwbrxltckrLVOJkOJv/lbib5QYAhyZj7CDRv/C5O0xcf0J\nRTrz2wH0tTWjUrmbMAnHpxiFPU22gjnUZ/LPA8xhQwmaloZG+Pm8M7TKbBZbKjnT\nLtx1I/CqoP3ZonW6ycur7H2oW7uayzAD0ODL1pHANuuP1/v7k63T6durby+sLzll\nrfTRJM7MI9pm+Y/gY6f1HfFHXvI0tqnuQ0wWt/vbAQKBgQC/MLNFVDwc9BeujAdX\n+5kkKEDje2QWXAkASNz2O99OcsUA6UhJehaDaCXJShOAXBaQ511TA4s/Sxq4sogV\nUZ4u4U8ieXb+L/ciR3Gkg6WloQ6Qsj/Zm98WVmaw3TCQujU5UrLyZ4jxumB/xBmn\noqx6t6nQ9vDk4h7zE5cK9b1p8wKBgQDap4GqhSIIfqXcB7/ugo4TjH8PK0TgVfGP\nIZyYHfe3Z/N6x7fzg9oLdt4kD4BqUkeTAyhefljUGt1kY91RcRqm9xbxWI+nhRfk\nzeIFBWMVPnczjSa5fft68fmQ9rEUk9607H+I7jOv3oO0UF/QfHaN+EwOM0FtN3Xr\n9g+1csH/IQKBgQChq5LMW1CBwz6LUMmc8poq4wcL1XlrFuRdoz+F0FciRRalkJ6Z\n021aLSVWsxcOgdBrM9nMqsCDAwVTjVRZgqzaQ5fhNQkUJIc8K2HDlbbq+egRH0my\nv4XDo8guYrwAhhUfpfi/1iENF2cmYzK2eG6VTt2AYHCPe05kifo9QFOtVQKBgApw\nfu9eRd6z9UVJFW/UyeXDCnn17ebsE4lq6GgW3jHig6x0BqNYwztS5I5CMzZgUUyC\nlRXV4HXYBoP5hKKTzNr15yGEwe8Umqxw6/6jYDSuc9CBR70Jd81J6klyjcfWu4ZV\n2Ez4Wn1mGVGtmLWCi8KBfVgcOF53jGjEqcFXBk4hAoGBAJsquGKWZOJ1egoZydDg\nJiFSHj3Vt56EM/tTuDxBV/bch09Nqo21nZu8D2thzijzfF5W75FeO2LRwk/qDFT7\n67fCnXAEKgxzpJ/pBsILHwZdJfg5MtUt3/HGpXdXt5dGB7J8eHg2qyuMtVImV0Di\nYbRx1cM0isSUYxMtt02kAjfi\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-8sd15@tiktok-clone-6f799.iam.gserviceaccount.com",
  "client_id": "100250256808512697336",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8sd15%40tiktok-clone-6f799.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
