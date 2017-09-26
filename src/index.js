function isMessenger(body) {
  if (typeof body.object === 'string' && Array.isArray(body.entry)) {
    return true;
  }
  return false;
}

function isLine(body) {
  if (
    body.type === 'message' ||
    body.type === 'follow' ||
    body.type === 'unfollow' ||
    body.type === 'join' ||
    body.type === 'leave' ||
    body.type === 'postback' ||
    body.type === 'beacon'
  ) {
    if (
      body.source &&
      typeof body.source === 'object' &&
      typeof body.source.type === 'string'
    ) {
      return true;
    }
  }

  return false;
}

function isSlack(body) {
  if (
    body.type === 'url_verification' &&
    typeof body.challenge === 'string' &&
    typeof body.token === 'string'
  ) {
    return true;
  }

  if (
    body.type === 'event_callback' &&
    body.event &&
    typeof body.event === 'object' &&
    typeof body.event.type === 'string'
  ) {
    return true;
  }

  return false;
}

function isTelegram(body) {
  if (typeof body.update_id === 'number') {
    return true;
  }
  return false;
}

module.exports = body => {
  if (isMessenger(body)) {
    return 'messenger';
  }
  if (isLine(body)) {
    return 'line';
  }
  if (isSlack(body)) {
    return 'slack';
  }
  if (isTelegram(body)) {
    return 'telegram';
  }
  return 'unknown';
};
