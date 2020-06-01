
import * as Sentry from "@sentry/browser";

//const isLocal = process.env.NODE_ENV === "development";
const isLocal = false;

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({ dsn: "https://f0c5ef973f224f849d6d939d9e32823d@o401020.ingest.sentry.io/5260036" });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let errorInfo = {};
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  logError(error, errorInfo);

  alert(message);
}